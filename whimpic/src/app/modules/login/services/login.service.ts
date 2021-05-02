import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private authService: AuthService, private router: Router) {}

  login(username: string, passwd: string, remember: boolean): void {
    this.authService.login({ username: username, password: passwd }, remember).subscribe((success) => {
      if (success) {
        this.router.navigate(['/home']);
      }
    });
  }

  logout(): void {
    this.authService.logout().subscribe(() => this.router.navigate(['/']));
  }
}
