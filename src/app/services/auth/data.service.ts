import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  path = '/';
  constructor(private cookieService: CookieService) {}

  setCookie(name: string, content: string) {
    if (environment.production) {
      this.cookieService.set(name, content, null, null, null, true, 'None'); // Produccion
    } else {
      this.cookieService.set(name, content, null, null, null, false, 'Strict'); // Desarrollo
    }
  }

  getCookie(name: string): any {
    return this.cookieService.get(name);
  }

  checkCookie(name: string): any {
    return this.cookieService.check(name);
  }

  removeCookie(name: string) {
    this.cookieService.delete(name, this.path);
  }

  removeAll() {
    if (environment.production) {
      this.cookieService.deleteAll(this.path, null, true, 'None'); // Produccion
      this.cookieService.deleteAll('/panel', null, true, 'None');
    } else {
      this.cookieService.deleteAll(this.path, null, false, 'Strict'); // Desarrollo
      this.cookieService.deleteAll('/panel', null, false, 'Strict');
    }
    localStorage.clear();
  }
}
