import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medicos-especialidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicos-especialidad.html',
  styleUrl: './medicos-especialidad.css',
})
export class MedicosEspecialidad {

  // Diccionario con las descripciones de cada especialidad
  infoEspecialidades: { [key: string]: string } = {
    'terapia-neural': 'La Terapia Neural es un enfoque terapéutico que busca restablecer el equilibrio del sistema nervioso mediante microinyecciones en puntos específicos.',
    'quiropraxia': 'La Quiropraxia se enfoca en el diagnóstico y tratamiento de trastornos del sistema musculoesquelético, especialmente la columna vertebral.',
    'fisioterapia': 'La Fisioterapia utiliza técnicas manuales y ejercicio terapéutico para la rehabilitación y prevención de lesiones.',
    'nutricion': 'Nutrición y Dietética ofrece planes alimenticios personalizados para mejorar la salud y el bienestar general.'
  };

  // Guardará la descripción que se mostrará en pantalla
  descripcionActual: string = '';

  // Evento que se ejecuta al dar click en una especialidad
  mostrarEspecialidad(clave: string): void {
    this.descripcionActual = this.infoEspecialidades[clave] ?? 'Información no disponible.';
  }
}