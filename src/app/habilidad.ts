export class Habilidad {
  nombre_Icono: string = '';
  nombre: string = '';
  porcentaje: Number;

  constructor(nombre_Icono: string, nombre: string, porcentaje: Number) {
    this.nombre_Icono = nombre_Icono;
    this.nombre = nombre;
    this.porcentaje = porcentaje;
  }
}
