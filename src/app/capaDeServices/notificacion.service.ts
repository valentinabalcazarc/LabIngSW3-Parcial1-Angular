import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: number;
  mensaje: string;
  tipo: 'exito' | 'error';
}

@Injectable({
  providedIn: 'root',
})
export class NotificacionService {
  // Usamos una señal para mantener las notificaciones reactivas de manera limpia
  notificaciones = signal<Toast[]>([]);

  mostrarNotificacion(mensaje: string, tipo: 'exito' | 'error' = 'exito', duracionMs: number = 3000): void {
    const id = Date.now();
    const nuevaNotificacion: Toast = { id, mensaje, tipo };

    // Agrega la notificación al arreglo
    this.notificaciones.update((toasts) => [...toasts, nuevaNotificacion]);

    // Elimina la notificación después del tiempo configurado
    setTimeout(() => {
      this.remover(id);
    }, duracionMs);
  }

  remover(id: number): void {
    this.notificaciones.update((toasts) => toasts.filter((t) => t.id !== id));
  }
}