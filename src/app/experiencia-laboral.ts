export class ExperienciaLaboral {
  logo: string = '';
  fecha_inicio: any = '';
  fecha_final: any = '';
  nombre_empresa: string = '';
  cargo: string = '';
  descripcion: string = '';

  constructor(
    logo: string,
    fecha_inicio: string,
    fecha_final: string,
    nombre_empresa: string,
    cargo: string,
    descripcion: string
  ) {
    this.logo = logo;
    this.fecha_inicio = fecha_inicio;
    this.fecha_final = fecha_final;
    this.nombre_empresa = nombre_empresa;
    this.cargo = cargo;
    this.descripcion = descripcion;
  }
}
