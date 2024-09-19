import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthserviceService } from './auth/services/authservice.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthserviceService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.islogin()) {
      return true;
    } else {
      console.log("Not accesable route");
      this.router.navigate(['/auth/signin']);
      return false;
    }
    
  }
}
