import { Component, OnInit } from '@angular/core';
import { faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch;
  faUserAlt = faUserAlt;

  constructor() { }

  ngOnInit(): void {
  }

  onClickLogo() {

  }

}
