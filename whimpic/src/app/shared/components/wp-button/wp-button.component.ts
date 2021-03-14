import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wp-button',
  templateUrl: './wp-button.component.html',
  styleUrls: ['./wp-button.component.scss']
})
export class WpButtonComponent implements OnInit {

  @Input() btnType: string;
  @Input() btnStyle: string[] = [];

  @Output() btnClick = new EventEmitter<any>()

  btnClasses = ['btn'];

  constructor() { }

  ngOnInit() {
    this.btnClasses.push(...this.btnStyle);
  }

}
