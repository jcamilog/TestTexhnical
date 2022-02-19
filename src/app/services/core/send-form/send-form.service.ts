import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { environment } from "./../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SendFormService {
  constructor(
    private http: HttpClient
  ) { }
  
  sendForm(data) {
    return this.http.post(`${environment}`, data)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 404) {
          return throwError('informacion invalida, intentalo de nuevo')
        }
        return throwError('Algo ocurrio intentalo nuevamente')
      })
    )
  }
}
