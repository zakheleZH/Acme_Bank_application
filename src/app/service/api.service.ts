import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUri:string = 'http://localhost:8080/api/accounts';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

   // Get all account
   getAccounts() {
    return this.http.get(`${this.baseUri}`);
  }
}
