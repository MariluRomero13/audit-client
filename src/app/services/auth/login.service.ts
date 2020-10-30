import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  requestCount = 0;
  constructor(private http: HttpClient, private dataService: DataService) { }

  login(credentials) {
    return this.http.post<any>(`${environment.API_URL}/login`, credentials);
  }

  refreshToken() {
    return this.http.post<any>(`${environment.API_URL}/login/refresh-token`, {
      refresh_token: this.getRefreshToken()
    });
  }

  setTokenData(tokenData) {
    this.dataService.setCookie('token', tokenData.token);
    this.dataService.setCookie('refresh-token', tokenData.refreshToken);
  }

  getToken() {
    return this.dataService.getCookie('token');
  }

  getRefreshToken() {
    return this.dataService.getCookie('refresh-token');
  }

  logout() {
    return this.http.post<any>(`${environment.API_URL}/logout`, {
      refresh_token: this.getRefreshToken()
    }).pipe(
      tap(() => {
        this.dataService.removeAll();
        localStorage.removeItem('module');
        localStorage.removeItem('icon');
      })
    );
  }

  decodeData(data) {
    const decoded = jwt_decode(data);
    this.dataService.setCookie('user', JSON.stringify(decoded.data));
  }
}
