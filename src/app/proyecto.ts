export class Proyecto {
  titulo: string = '';
  imagen: string = '';
  descripcion: string = '';
  link: string = '';

  constructor(
    imagen: string,
    titulo: string,
    descripcion: string,
    link: string
  ) {
    this.imagen = imagen;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.link = link;
  }
}
