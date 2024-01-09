// src/app/services/activos.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivosService {
  private apiUrl = 'http://localhost:3000/api/allActivos'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  obtenerTodosActivos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error al obtener activos:', error);
        return throwError(error);
      })
    );
  }
}
