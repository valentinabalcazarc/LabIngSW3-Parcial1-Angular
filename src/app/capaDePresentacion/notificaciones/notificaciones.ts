import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionService } from '../../capaDeServices/notificacion.service';

@Component({
  selector: 'app-notificaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notificaciones.html',
  styleUrl: './notificaciones.css',
})
export class Notificaciones {
  protected notificacionService = inject(NotificacionService);
}