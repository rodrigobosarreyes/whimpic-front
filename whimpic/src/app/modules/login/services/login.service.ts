import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CoreService } from 'src/app/core/services/core/core.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private authService: AuthService, private router: Router, private coreService: CoreService) {}

  login(username: string, passwd: string, remember: boolean): Promise<boolean> {
    return this.authService
      .login({ username: username, password: passwd }, remember)
      .pipe(
        tap((valid) => {
          if (valid) {
            this.coreService.changeLanguage();
          }
        })
      )
      .toPromise();
  }

  logout(): void {
    this.authService.logout().subscribe(() => this.router.navigate(['/']));
  }
}
