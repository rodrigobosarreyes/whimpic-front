import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, passwd: string, remember: boolean) {
    return this.http.post('api/token/', {username: username, password: passwd});
  }
}
