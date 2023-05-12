import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from './educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EducacionserviService {
  constructor(private http: HttpClient) {}
  listarEducaciones(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>();
  }
}
