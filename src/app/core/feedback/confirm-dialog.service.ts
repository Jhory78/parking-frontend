import { Injectable, signal } from '@angular/core';

export interface ConfirmOptions {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  /** 'danger' para acciones que quitan acceso o liberan recursos. */
  tone?: 'primary' | 'danger';
  icon?: string;
}

interface ConfirmRequest extends Required<ConfirmOptions> {
  resolve: (accepted: boolean) => void;
}

/** Reemplaza window.confirm() por un modal con el estilo de la aplicación. */
@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  readonly request = signal<ConfirmRequest | null>(null);

  confirm(options: ConfirmOptions): Promise<boolean> {
    this.close(false);
    return new Promise(resolve => {
      this.request.set({
        confirmText: 'Confirmar',
        cancelText: 'Cancelar',
        tone: 'primary',
        icon: options.tone === 'danger' ? 'warning' : 'help',
        ...options,
        resolve
      });
    });
  }

  close(accepted: boolean): void {
    const current = this.request();
    if (current) {
      this.request.set(null);
      current.resolve(accepted);
    }
  }
}
