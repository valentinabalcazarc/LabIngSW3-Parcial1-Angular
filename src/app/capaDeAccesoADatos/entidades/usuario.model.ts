export class Usuario {
  constructor(
    public id: number,
    public tipoId: string,
    public cedula: string,
    public nombres: string,
    public apellidos: string,
    public correo: string,
    public genero: string,
    public fecNac: string
  ) {}
}