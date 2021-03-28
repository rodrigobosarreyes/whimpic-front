import { Component } from '@angular/core';
import { faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faSearch = faSearch;
  faUserAlt = faUserAlt;

  onClickLogo(): void {
    // lol
  }
}
