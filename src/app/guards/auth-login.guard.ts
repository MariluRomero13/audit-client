import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/authentication-services/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {

  constructor(private loginService: LoginService,
              private router: Router) { }

  canActivate() {
    if (this.loginService.getToken()) {
      this.router.navigate(['/panel']);
      return false;
    }
    return true;
  }
}
