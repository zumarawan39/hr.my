import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private api="http://localhost:3000/auth"
  constructor(private http:HttpClient) { }

   islogin():boolean {
    // const token = localStorage.getItem('token');
    // return token !== null;  

    return true;
   }

  signUp(data: any): Observable<any> {
    console.log('Request Payload:', data); // Log the payload
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
  
    return this.http.post<any>(`${this.api}/create`, data,).pipe(
      // catchError(this.handleError.bind(this))
    );
  }  
  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.api}/login`, data).pipe(
      // catchError(this.handleError.bind(this))
    );
  };
}
