import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-episode-control-bar',
  templateUrl: './episode-control-bar.component.html',
  styleUrls: ['./episode-control-bar.component.scss']
})
export class EpisodeControlBarComponent implements OnInit {
  @Input() maxValue: number;
  @Input() initValue: number;

  @Output() changeValue = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onInputControlbar(event) {
    this.changeValue.emit(event.target.value);
  }
}
