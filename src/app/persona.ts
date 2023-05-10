export class Persona {
  titulo: string = '';
  imagen: string = '';
  password: string = '';
  usuario: string = '';

  constructor(
    titulo: string,
    imagen: string,
    password: string,
    usuario: string
  ) {
    this.titulo = titulo;
    this.imagen = imagen;
    this.password = password;
    this.usuario = usuario;
  }
}
