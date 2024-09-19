import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { SpinnerService } from './shared/spinner.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private spinnerService:SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.spinnerService.show();
    console.log("request=>",request);
    const token="f4179b26-21ac-432c-bcd8-cb4bc6e50981";
    const modifiedreq=request.clone({
      setHeaders:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      }
    })
    
    return next.handle(modifiedreq).pipe(
      catchError((err:HttpErrorResponse)=>{
        console.log("error",err);
      return throwError(err);    
      }),
      finalize(()=>{
        this.spinnerService.hide();
      })
    );

  }
}
