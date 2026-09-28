import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { NotificacionService } from '../../capaDeServices/notificacion.service';
import { GestionarUsuarioService } from '../../capaDeServices/gestionar-usuario.service';

// Validador personalizado para la fecha de nacimiento (no mayor a hoy)
export function fechaNacimientoValida(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null;
  const fechaSeleccionada = new Date(control.value);
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  return fechaSeleccionada > hoy ? { fechaFutura: true } : null;
}

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario implements OnInit {
  private usuarioService = inject(GestionarUsuarioService);
  private notificacionService = inject(NotificacionService);
  formUsuario!: FormGroup;
  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formUsuario = this.fb.group({
      tipoIdentificacion: ['', Validators.required],
      numeroIdentificacion: ['', Validators.required],
      nombres: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      apellidos: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      correoElectronico: ['', [
        Validators.required, 
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      genero: ['', Validators.required],
      fechaNacimiento: ['', [Validators.required, fechaNacimientoValida]]
    });
  }

  // Método auxiliar para acceder fácilmente a los controles en la plantilla HTML
  get f() {
    return this.formUsuario.controls;
  }

  onSubmit(): void {
    if (this.formUsuario.invalid) {
      this.formUsuario.markAllAsTouched();
      this.notificacionService.mostrarNotificacion('Por favor completa todos los campos', 'error');
      return;
    }

    const usuario = this.formUsuario.value;
    console.log('Usuario registrado:', usuario);

    const usuarioCreado = this.usuarioService.registrarUsuario(
      usuario.tipoIdentificacion,
      usuario.numeroIdentificacion,
      usuario.nombres,
      usuario.apellidos,
      usuario.correoElectronico,
      usuario.genero,
      usuario.fechaNacimiento
    );

    this.notificacionService.mostrarNotificacion(`Usuario ${usuario.nombres} registrado con éxito`, 'exito');

    this.formUsuario.reset();
  }
}