import { Injectable, inject } from '@angular/core';
import { UsuarioRepository } from '../capaDeAccesoADatos/repositorios/usuario.repository';
import { Usuario } from '../capaDeAccesoADatos/entidades/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class GestionarUsuarioService {
  private repoUsuario = inject(UsuarioRepository);

  registrarUsuario(tipoId: string, cedula: string, nombres: string, apellidos: string, correo: string, genero: string, fecNac: string): Usuario {
    const id = this.repoUsuario.siguienteId();
    const usuario = new Usuario(id, tipoId, cedula, nombres, apellidos, correo, genero, fecNac);
    this.repoUsuario.agregar(usuario);
    return usuario;
  }

  listarUsuarios(): Usuario[] {
    return this.repoUsuario.obtenerTodos();
  }

  buscarUsuario(id: number): Usuario | undefined {
    return this.repoUsuario.buscarPorId(id);
  }
}