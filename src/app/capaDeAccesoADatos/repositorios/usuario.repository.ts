import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRepository {
  private usuarios: Usuario[] = [];

  agregar(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  obtenerTodos(): Usuario[] {
    return this.usuarios;
  }

  buscarPorId(id: number): Usuario | undefined {
    return this.usuarios.find(p => p.id === id);
  }

  siguienteId(): number {
    return this.usuarios.length + 1;
  }
}