export class Habilidad {
  nombre_Icono: string = '';
  nombre: string = '';
  porcentaje: number;

  constructor(nombre_Icono: string, nombre: string, porcentaje: number) {
    this.nombre_Icono = nombre_Icono;
    this.nombre = nombre;
    this.porcentaje = porcentaje;
  }
}
