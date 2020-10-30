import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { LoginService } from '../services/authentication-services/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private loginService: LoginService,
              private router: Router) {}

  canLoad(): boolean {
    if (!this.loginService.getToken()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
