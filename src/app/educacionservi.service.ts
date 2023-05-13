import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from './educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EducacionserviService {
  urlBase: string = 'http://localhost:8080/educacion/';
  constructor(private http: HttpClient) {}
  listarEducaciones(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.urlBase}ListarTodo`);
  }

  actualizar(model: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(`${this.urlBase}actualizar`, model);
  }

  buscar(id: number): Observable<Educacion> {
    return this.http.post<Educacion>(`${this.urlBase}buscar`, id);
  }

  eliminar(id: number): Observable<Educacion> {
    return this.http.delete<Educacion>(`${this.urlBase}eliminar?id=${id}`);
  }
}
