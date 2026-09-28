import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './capaDePresentacion/header/header';
import { Footer } from "./capaDePresentacion/footer/footer";
import { BarraNavegacion } from './capaDePresentacion/barra-navegacion/barra-navegacion';
import { Carrusel } from './capaDePresentacion/carrusel/carrusel';
import { MedicosEspecialidad } from './capaDePresentacion/medicos-especialidad/medicos-especialidad';
import { Formulario } from './capaDePresentacion/formulario/formulario';
import { Notificaciones } from './capaDePresentacion/notificaciones/notificaciones';

@Component({
  imports: [RouterOutlet, Header, Footer, BarraNavegacion, Carrusel, MedicosEspecialidad, Formulario, Notificaciones],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = 'P2_Parcial-Angular';
}
