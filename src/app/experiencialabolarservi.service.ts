import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperiencialabolarserviService {
  constructor(private http: HttpClient) {}
}
