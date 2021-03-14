import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginInputComponent } from '../../components/login-input/login-input.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  @ViewChild('usernameInput', {static: false}) usernameInput: LoginInputComponent;
  @ViewChild('passwdInput', {static: false}) passwdInput: LoginInputComponent;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onClickLogin(event) {
    console.log(this.usernameInput.text);
    console.log(this.passwdInput.text);
    this.loginService.login(this.usernameInput.text, this.passwdInput.text, false)
      .subscribe(console.log);
    return false;
  }

}
