export class Educacion {
  fecha_inicio: any = '';
  fecha_final: any = '';
  nombre_empresa: string = '';
  titulo: string = '';
  descripcion: string = '';

  constructor(
    fecha_inicio: any,
    fecha_final: any,
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
