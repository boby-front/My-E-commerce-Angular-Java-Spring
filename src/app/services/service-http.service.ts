import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceHttpService {

  constructor(private http: HttpClient) { }

  submitFormData(formData: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post('http://localhost:8080/api/contact/submit', formData, { headers, responseType: 'text' }) // Si vous attendez une réponse textuelle comme 'ok'
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {

    console.error('An error occurred:', error.error);
    return throwError(error.error);
  }
}
