import { Component, ViewChild } from '@angular/core';
import { LoginInputComponent } from '../../components/login-input/login-input.component';
import { LoginService } from '../../services/login.service';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  @ViewChild('usernameInput', { static: false }) usernameInput: LoginInputComponent;
  @ViewChild('passwdInput', { static: false }) passwdInput: LoginInputComponent;
  valid = true;
  remember = false;
  faUsers = faUsers;

  constructor(private loginService: LoginService, private router: Router) {}

  onClickLogin(): boolean {
    this.loginService.login(this.usernameInput.text, this.passwdInput.text, this.remember).then((valid) => {
      console.log(valid);
      this.valid = valid;
      if (this.valid) {
        this.router.navigate(['/home']);
      }
    });
    return false;
  }
}
