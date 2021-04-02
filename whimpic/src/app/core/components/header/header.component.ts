import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faHome = faHome;
  faSearch = faSearch;
  faUserAlt = faUserAlt;

  constructor(private router: Router) {}

  onClickLogo(): void {
    this.router.navigate(['/home']);
  }
}
