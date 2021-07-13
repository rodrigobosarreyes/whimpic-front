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
  private readonly VERIFY_URL = `${this.END_POINT_URL}verify/`;

  constructor(private http: HttpClient) {}

  login(user: { username: string; password: string }, saveLocal: boolean): Observable<boolean> {
    return this.http.post<Token>(this.END_POINT_URL, user).pipe(
      tap((tokens: Token) => this.doLoginUser(user.username, tokens)),
      mapTo(true),
      catchError((error) => {
        alert(error.error.detail);
        return of(false);
      })
    );
  }

  doLoginUser(username: string, tokens: Token): void {
    this.storeTokens(tokens);
  }

  storeTokens(tokens: Token): void {
    sessionStorage.setItem(this.JWT_TOKEN, tokens.access);
    sessionStorage.setItem(this.REFRESH_TOKEN, tokens.refresh);
  }

  logout(): Observable<any> {
    return of('').pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError((error) => {
        console.error(error);
        alert(error.error.detail);
        return of(false);
      })
    );
  }

  doLogoutUser(): void {
    this.removeTokens();
  }

  removeTokens(): void {
    sessionStorage.removeItem(this.JWT_TOKEN);
    sessionStorage.removeItem(this.REFRESH_TOKEN);
  }

  refreshToken(): Observable<any> {
    return this.http
      .post<any>(`${this.END_POINT_URL}refresh/`, {
        refresh: this.getRefreshToken()
      })
      .pipe(tap((tokens: Token) => this.storeJwtToken(tokens.access)));
  }

  storeJwtToken(jwt): void {
    sessionStorage.setItem(this.JWT_TOKEN, jwt);
  }

  getJwtToken() {
    const sessionToken = sessionStorage.getItem(this.JWT_TOKEN);
    return sessionToken;
  }

  private getRefreshToken() {
    return sessionStorage.getItem(this.REFRESH_TOKEN);
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  verifyToken() {
    return this.http.post<any>(this.VERIFY_URL, { token: this.getJwtToken() });
  }
}

interface Token {
  refresh: string;
  access: string;
}
