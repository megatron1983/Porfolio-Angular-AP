export class Educacion {
  fecha_inicio: string = '';
  fecha_final: string = '';
  nombre_empresa: string = '';
  titulo: string = '';
  descripcion: string = '';

  constructor(
    fecha_inicio: string,
    fecha_final: string,
    nombre_empresa: string,
    titulo: string,
    descripcion: string
  ) {
    this.fecha_inicio = fecha_inicio;
    this.fecha_final = fecha_final;
    this.nombre_empresa = nombre_empresa;
    this.titulo = titulo;
    this.descripcion = descripcion;
  }
}
