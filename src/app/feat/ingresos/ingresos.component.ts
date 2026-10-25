import { Component, DestroyRef, ElementRef, OnDestroy, OnInit, ViewChild, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, interval } from 'rxjs';
import { OccupancyStreamService } from '../../core/spaces/occupancy-stream.service';
import { EntryService } from '../../services/entry.service';
import { EntryResponse, PlateRecognitionResponse, VEHICLE_TYPE_SINGULAR_LABELS } from '../../models/entry.model';
import { VEHICLE_TYPE_LABELS, VehicleType } from '../../models/parking.model';
import { apiErrorMessage, apiFieldErrors } from '../../utils/api-error.utils';
import { preparePlateImage } from '../../utils/image.utils';
import { formatPlate, inferVehicleType, isValidPlate, normalizePlate } from '../../utils/plate.utils';
import { formatMinutes, minutesSince } from '../../utils/time.utils';

/** Paso del registro de ingreso. */
type EntryStep = 'capture' | 'camera' | 'recognizing' | 'confirm';

/** El tiempo de permanencia de la lista se recalcula cada 30 s. */
const CLOCK_TICK_MS = 30_000;

function plateValidator(control: AbstractControl): ValidationErrors | null {
  return !control.value || isValidPlate(control.value) ? null : { plate: true };
}

/**
 * Ingreso de vehículos por placa (RF-01..11) y salida.
 * <p>
 * El OCR solo propone la placa: el operario la confirma o corrige antes de
 * registrar el ingreso. Si el OCR falla (422) pasa al ingreso manual (RF-03).
 */
@Component({
  selector: 'app-ingresos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit, OnDestroy {
  readonly vehicleTypes: VehicleType[] = ['CAR', 'MOTORCYCLE'];
  readonly vehicleTypeLabels = VEHICLE_TYPE_LABELS;
  readonly singularLabels = VEHICLE_TYPE_SINGULAR_LABELS;
  readonly formatPlate = formatPlate;
  readonly formatMinutes = formatMinutes;

  // ── Ingreso ───────────────────────────────────────────────────
  step: EntryStep = 'capture';
  @ViewChild('cameraVideo') private cameraVideo?: ElementRef<HTMLVideoElement>;
  private cameraStream: MediaStream | null = null;
  previewUrl: string | null = null;
  recognition: PlateRecognitionResponse | null = null;
  /** Mensaje cuando el OCR no pudo leer la placa (RF-03). */
  manualNotice = '';
  savingEntry = false;
  entryError = '';
  entryFieldErrors: Record<string, string> = {};
  lastEntry: EntryResponse | null = null;

  entryForm = this.fb.nonNullable.group({
    plate: ['', [Validators.required, plateValidator]],
    /** null: se usa el tipo que indica el formato de la placa (RF-04). */
    vehicleType: this.fb.control<VehicleType | null>(null)
  });

  // ── Salida ────────────────────────────────────────────────────
  exitForm = this.fb.nonNullable.group({
    plate: ['', [Validators.required, plateValidator]]
  });
  exitingPlate: string | null = null;
  exitError = '';
  lastExit: EntryResponse | null = null;

  // ── Vehículos dentro ──────────────────────────────────────────
  readonly activeEntries = signal<EntryResponse[]>([]);
  readonly loadingActive = signal(true);
  activeError = '';
  private readonly now = signal(Date.now());

  readonly availableByType = computed(() => {
    const byType = this.stream.occupancy()?.byVehicleType ?? [];
    return new Map(byType.map(item => [item.vehicleType, item.availableSpaces]));
  });

  constructor(
    private entryService: EntryService,
    public stream: OccupancyStreamService,
    private fb: FormBuilder,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    if (!this.stream.occupancy()) {
      this.stream.refresh();
    }
    this.loadActiveEntries();

    // Ingresos y salidas de otros operarios también mueven plazas
    this.stream.spaceChanges$
      .pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.loadActiveEntries());

    interval(CLOCK_TICK_MS)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.now.set(Date.now()));
  }

  ngOnDestroy(): void {
    this.stopCamera();
    this.clearPreview();
  }

  // ── Ingreso: foto ─────────────────────────────────────────────

  /** RF-01, RF-02: envía la foto al OCR. */
  async onPhotoSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = ''; // permite volver a elegir la misma foto
    if (!file) return;

    this.clearEntryMessages();
    this.lastEntry = null;

    let image: Blob;
    try {
      image = await preparePlateImage(file);
    } catch (error) {
      this.entryError = (error as Error).message;
      return;
    }

    this.recognizeImage(image, file.name);
  }

  /** RF-02: envía la imagen (de archivo o cámara) al OCR y muestra el resultado. */
  private recognizeImage(image: Blob, fileName: string): void {
    this.clearPreview();
    this.previewUrl = URL.createObjectURL(image);
    this.step = 'recognizing';

    this.entryService.recognize(image, fileName).subscribe({
      next: recognition => this.showRecognition(recognition),
      error: (err: HttpErrorResponse) => {
        if (err.status === 422) {
          this.startManualEntry(apiErrorMessage(err, 'No se pudo leer la placa, ingrésala manualmente'));
          return;
        }
        this.step = 'capture';
        this.entryError = apiFieldErrors(err)['image'] ?? apiErrorMessage(err, 'No se pudo procesar la foto');
      }
    });
  }

  // ── Ingreso: cámara (RF-01) ───────────────────────────────────

  /** Abre la cámara del dispositivo para capturar la placa en vivo. */
  async startCamera(): Promise<void> {
    this.clearEntryMessages();
    this.lastEntry = null;

    if (!navigator.mediaDevices?.getUserMedia) {
      this.entryError = 'Tu navegador no permite usar la cámara. Usa "Subir imagen".';
      return;
    }

    try {
      this.cameraStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1920 }, height: { ideal: 1080 } },
        audio: false
      });
    } catch {
      this.entryError = 'No se pudo abrir la cámara. Revisa los permisos del navegador o usa "Subir imagen".';
      return;
    }

    this.step = 'camera';
    // El <video> solo existe tras renderizar el paso 'camera'.
    setTimeout(() => {
      const video = this.cameraVideo?.nativeElement;
      if (video && this.cameraStream) {
        video.srcObject = this.cameraStream;
        video.play().catch(() => undefined);
      }
    });
  }

  /** Captura un fotograma del video y lo envía al OCR. */
  capturePhoto(): void {
    const video = this.cameraVideo?.nativeElement;
    if (!video || !video.videoWidth || !video.videoHeight) {
      return;
    }

    const maxSide = 1920;
    const scale = Math.min(1, maxSide / Math.max(video.videoWidth, video.videoHeight));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(video.videoWidth * scale);
    canvas.height = Math.round(video.videoHeight * scale);
    canvas.getContext('2d')?.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(
      blob => {
        if (!blob) {
          this.entryError = 'No se pudo capturar la foto, inténtalo de nuevo.';
          return;
        }
        this.stopCamera();
        this.recognizeImage(blob, 'captura.jpg');
      },
      'image/jpeg',
      0.85
    );
  }

  /** Cierra la cámara sin capturar y vuelve al paso inicial. */
  cancelCamera(): void {
    this.stopCamera();
    this.step = 'capture';
  }

  private stopCamera(): void {
    this.cameraStream?.getTracks().forEach(track => track.stop());
    this.cameraStream = null;
  }

  /** RF-03: formulario sin foto, o porque el OCR no leyó la placa. */
  startManualEntry(notice = ''): void {
    this.recognition = null;
    this.manualNotice = notice;
    this.entryForm.reset({ plate: '', vehicleType: null });
    this.step = 'confirm';
  }

  cancelEntry(): void {
    this.step = 'capture';
    this.recognition = null;
    this.manualNotice = '';
    this.clearPreview();
    this.clearEntryMessages();
  }

  private showRecognition(recognition: PlateRecognitionResponse): void {
    this.recognition = recognition;
    this.manualNotice = '';
    this.entryForm.reset({ plate: formatPlate(recognition.plate), vehicleType: null });
    this.step = 'confirm';
  }

  // ── Ingreso: confirmación ─────────────────────────────────────

  /** Tipo que indica el formato de la placa escrita; null si no es colombiana. */
  get inferredType(): VehicleType | null {
    return inferVehicleType(this.entryForm.controls.plate.value);
  }

  /** Tipo con el que se registrará: el elegido o, si no, el del formato. */
  get effectiveType(): VehicleType | null {
    return this.entryForm.controls.vehicleType.value ?? this.inferredType;
  }

  /** La placa editada ya no es la que leyó el OCR: las advertencias del OCR dejan de aplicar. */
  get plateEdited(): boolean {
    return !!this.recognition && normalizePlate(this.entryForm.controls.plate.value) !== this.recognition.plate;
  }

  /** RF-06, RF-07: aviso previo; el backend es quien decide (409). */
  get noSpaceWarning(): string {
    const occupancy = this.stream.occupancy();
    if (occupancy?.entryBlocked) {
      return 'Barrera bloqueada: el parqueadero está lleno.';
    }
    const type = this.effectiveType;
    if (type && this.availableByType().get(type) === 0) {
      return `No hay plazas libres para ${this.vehicleTypeLabels[type].toLowerCase()}.`;
    }
    return '';
  }

  selectVehicleType(type: VehicleType | null): void {
    this.entryForm.controls.vehicleType.setValue(type);
    delete this.entryFieldErrors['vehicleType'];
  }

  confirmEntry(): void {
    if (this.entryForm.invalid) {
      this.entryForm.markAllAsTouched();
      return;
    }
    if (!this.effectiveType) {
      this.entryFieldErrors = { vehicleType: 'Indica el tipo de vehículo: la placa no tiene formato colombiano' };
      return;
    }

    const { plate, vehicleType } = this.entryForm.getRawValue();
    this.savingEntry = true;
    this.clearEntryMessages();

    this.entryService
      .registerEntry({ plate: normalizePlate(plate), ...(vehicleType ? { vehicleType } : {}) })
      .subscribe({
        next: entry => {
          this.savingEntry = false;
          this.lastEntry = entry;
          this.cancelEntry();
          this.addActiveEntry(entry);
        },
        error: err => {
          this.savingEntry = false;
          this.entryError = apiErrorMessage(err, 'No se pudo registrar el ingreso');
          this.entryFieldErrors = apiFieldErrors(err);
        }
      });
  }

  // ── Salida ────────────────────────────────────────────────────

  submitExit(): void {
    if (this.exitForm.invalid) {
      this.exitForm.markAllAsTouched();
      return;
    }
    this.registerExit(normalizePlate(this.exitForm.controls.plate.value));
  }

  /** Salida desde la lista de vehículos dentro o desde el aviso "ya está dentro". */
  exitFromList(entry: EntryResponse): void {
    if (!confirm(`¿Registrar la salida de ${formatPlate(entry.plate)} (plaza ${entry.space.code})?`)) {
      return;
    }
    this.registerExit(entry.plate);
  }

  exitRecognizedVehicle(plate: string): void {
    if (!confirm(`¿Registrar la salida de ${formatPlate(plate)}?`)) {
      return;
    }
    this.cancelEntry();
    this.registerExit(plate);
  }

  private registerExit(plate: string): void {
    this.exitingPlate = plate;
    this.exitError = '';
    this.lastExit = null;

    this.entryService.registerExit(plate).subscribe({
      next: entry => {
        this.exitingPlate = null;
        this.lastExit = entry;
        this.exitForm.reset({ plate: '' });
        this.activeEntries.update(entries => entries.filter(active => active.id !== entry.id));
      },
      error: err => {
        this.exitingPlate = null;
        this.exitError = apiFieldErrors(err)['plate'] ?? apiErrorMessage(err, 'No se pudo registrar la salida');
      }
    });
  }

  // ── Vehículos dentro ──────────────────────────────────────────

  loadActiveEntries(): void {
    this.entryService.findActive().subscribe({
      next: entries => {
        this.activeEntries.set(entries);
        this.loadingActive.set(false);
        this.activeError = '';
      },
      error: err => {
        this.activeError = apiErrorMessage(err, 'Error al cargar los vehículos dentro');
        this.loadingActive.set(false);
      }
    });
  }

  /** Tiempo dentro, recalculado con el reloj de la pantalla. */
  stayOf(entry: EntryResponse): string {
    return formatMinutes(minutesSince(entry.entryTime, this.now()));
  }

  trackById(_: number, entry: EntryResponse): number {
    return entry.id;
  }

  private addActiveEntry(entry: EntryResponse): void {
    this.activeEntries.update(entries => [entry, ...entries.filter(active => active.id !== entry.id)]);
  }

  private clearEntryMessages(): void {
    this.entryError = '';
    this.entryFieldErrors = {};
  }

  private clearPreview(): void {
    if (this.previewUrl) {
      URL.revokeObjectURL(this.previewUrl);
      this.previewUrl = null;
    }
  }
}
