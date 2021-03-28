import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.scss']
})
export class LoginInputComponent {
  @Input() inputId: string;
  @Input() inputType: string;
  @Input() label: string;
  @Input() text: string;

  @Output() textChange = new EventEmitter<string>();
}
