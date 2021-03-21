import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AuthService) { }

  login(username: string, passwd: string, remember: boolean) {
    this.authService.login({username: username, password: passwd}, remember)
      .subscribe( success => {
        if (success) {
          alert('yaaayy');
        }
      });
  }
}
