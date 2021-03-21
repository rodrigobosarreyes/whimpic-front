import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, mapTo, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private readonly END_POINT_URL = 'api/token/';
  private loggedUser: string;

  constructor(private http: HttpClient) { }

  login(user: {username: string, password: string}, saveLocal: boolean): Observable<boolean> {
    return this.http.post<any>(this.END_POINT_URL, user)
      .pipe(
        tap((tokens: Token) => this.doLoginUser(user.username, tokens, saveLocal)),
        mapTo(true),
        catchError(error => {
          alert(error.error.detail);
          return of(false)
        })
      )
  }

  doLoginUser(username: string, tokens: Token, saveLocal: boolean): void {
    this.loggedUser = username;
    this.storeTokens(tokens, saveLocal);
  }

  storeTokens(tokens: Token, saveLocal: boolean): void {
    if (saveLocal) {
      localStorage.setItem(this.JWT_TOKEN, tokens.access);
      localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh);
    } else {
      sessionStorage.setItem(this.JWT_TOKEN, tokens.access);
      sessionStorage.setItem(this.REFRESH_TOKEN, tokens.refresh);
    }
  }

  logout(): Observable<any> {
    return this.http.post<any>('', {refreshToken: this.getRefreshToken()})
      .pipe(
        tap(() => this.doLogoutUser()),
        mapTo(true),
        catchError(error => {
          alert(error.error.detail);
          return of(false);
        })
      );
  }

  doLogoutUser(): void {
    this.loggedUser = null;
    this.removeTokens();
  }

  removeTokens(): void {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }

  refreshToken(): Observable<any> {
    return this.http.post<any>(`${this.END_POINT_URL}/refresh`, {refreshToken: this.getRefreshToken()})
      .pipe(
        tap((tokens: Token) => this.storeJwtToken(tokens.access))
      );
  }

  storeJwtToken(jwt): void {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }
}

interface Token {
  refresh: string;
  access: string;
}