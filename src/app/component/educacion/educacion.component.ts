import { Component } from '@angular/core';
import { Educacion } from 'src/app/educacion';
import { EducacionserviService } from 'src/app/educacionservi.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent {
  // contacto: Contacto= New Contacto();
  listaEducacion: Educacion[] = [
    {
      fecha_inicio: '2002',
      fecha_final: 'actualidad',
      nombre_empresa: 'Argentina Programa 4.0',
      titulo: 'Desarrollador Full Stack',
      descripcion:
        'Es un programa para acceder a capacitaciones gratuitas en: programación, testing y habilidades digitales.',
    },
    {
      fecha_inicio: '2019',
      fecha_final: 'actualidad',
      nombre_empresa: 'Universidad Provincial de la Punta',
      titulo: 'Desarollador de Software',
      descripcion:
        'Formar alumnos con sólidos conocimientos, que puedan insertarse exitosamente en el ámbito laboral regional, asegurando la adquisición de las competencias requeridas por el mercado del trabajo, a través de una adecuada secuenciación e integración de conceptos y la aplicación de metodologías y herramientas enfocadas al desarrollo de software.',
    },
    {
      fecha_inicio: '2020',
      fecha_final: '2023',
      nombre_empresa: 'Azul',
      titulo: 'Analista',
      descripcion:
        'integración de conceptos y la aplicación de metodologías y herramientas enfocadas al desarrollo de software.',
    },
  ];
  constructor(private service: EducacionserviService) {
    this.listarTodo();
  }

  listarTodo(): void {
    this.service.listarEducaciones().subscribe({
      next: (response) => {
        Object.assign(this.listaEducacion, []);
        Object.assign(this.listaEducacion, response);
      },
      error: (error) => console.error(error),
    });
  }

  guardar(model: Educacion): void {
    this.service.actualizar(model).subscribe({
      next: () => this.listarTodo(),
    });
  }

  eliminar(id: number): void {
    this.service.eliminar(id).subscribe({
      next: () => this.listarTodo(),
    });
  }

  buscar(id: number): void {
    this.service.buscar(id).subscribe({
      next: (res) => console.log(res),
    });
  }
}
