import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.scss']
})
export class LoginInputComponent implements OnInit {

  @Input() inputId: string;
  @Input() inputType: string;
  @Input() label: string;
  @Input() text: string;

  @Output() textChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
