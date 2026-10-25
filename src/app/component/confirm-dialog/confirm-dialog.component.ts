import { Component, ElementRef, HostListener, ViewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogService } from '../../core/feedback/confirm-dialog.service';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="backdrop" *ngIf="dialog.request() as req" (click)="dialog.close(false)">
      <div
        class="dialog"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        aria-describedby="confirm-message"
        (click)="$event.stopPropagation()"
      >
        <span class="icon material-symbols-outlined" [class.danger]="req.tone === 'danger'">{{ req.icon }}</span>
        <h3 id="confirm-title">{{ req.title }}</h3>
        <p id="confirm-message">{{ req.message }}</p>
        <div class="actions">
          <button type="button" class="btn btn-outlined" (click)="dialog.close(false)">
            {{ req.cancelText }}
          </button>
          <button
            #confirmButton
            type="button"
            class="btn"
            [class.btn-primary]="req.tone === 'primary'"
            [class.btn-danger]="req.tone === 'danger'"
            (click)="dialog.close(true)"
          >
            {{ req.confirmText }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 1100;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      background: rgba(8, 14, 27, .7);
      backdrop-filter: blur(4px);
      animation: fade .15s ease-out;
    }
    .dialog {
      width: 100%;
      max-width: 420px;
      padding: 1.75rem;
      border: 1px solid var(--pk-border);
      border-radius: var(--pk-radius-lg);
      background: var(--pk-surface);
      box-shadow: var(--pk-shadow-lg);
      animation: pop .18s ease-out;
    }
    .icon {
      display: inline-grid;
      place-items: center;
      width: 44px;
      height: 44px;
      margin-bottom: 1rem;
      border-radius: 50%;
      color: var(--pk-primary);
      background: var(--pk-primary-soft);
      font-size: 24px;
    }
    .icon.danger { color: var(--pk-danger); background: var(--pk-danger-soft); }
    h3 { font-size: 1.25rem; }
    p { margin: .5rem 0 0; color: var(--pk-ink-muted); font-size: .92rem; line-height: 1.5; }
    .actions { display: flex; justify-content: flex-end; gap: .75rem; margin-top: 1.75rem; }
    @keyframes fade { from { opacity: 0; } }
    @keyframes pop { from { opacity: 0; transform: translateY(8px) scale(.98); } }
    @media (max-width: 480px) {
      .actions { flex-direction: column-reverse; }
      .actions .btn { width: 100%; }
    }
  `]
})
export class ConfirmDialogComponent {
  @ViewChild('confirmButton') private confirmButton?: ElementRef<HTMLButtonElement>;

  constructor(public dialog: ConfirmDialogService) {
    effect(() => {
      if (this.dialog.request()) {
        setTimeout(() => this.confirmButton?.nativeElement.focus());
      }
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.dialog.close(false);
  }
}
