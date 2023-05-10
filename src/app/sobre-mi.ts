export class SobreMi {
  profesion: string = '';
  foto: string = '';
  descripcion: string = '';

  constructor(profesion: string, foto: string, descripcion: string) {
    this.profesion = profesion;
    this.foto = foto;
    this.descripcion = descripcion;
  }
}
