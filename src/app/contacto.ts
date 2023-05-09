export class Contacto {
  telefono: string = '';
  direccion: string = '';
  email: string = '';

  constructor(telefono: string, direccion: string, email: string) {
    this.telefono = telefono;
    this.direccion = direccion;
    this.email = email;
  }
}
