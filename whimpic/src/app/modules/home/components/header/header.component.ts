import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHome, faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/modules/login/services/login.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faHome = faHome;
  faSearch = faSearch;
  faUserAlt = faUserAlt;
  validRoute = true;

  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    // this.router.events.subscribe((val) => {
    //   if (val instanceof NavigationEnd) {
    //     this.validRoute = val.url !== '/login';
    //   }
    // });
  }

  onClickLogo(): void {
    this.router.navigate(['/home']);
  }

  onClickLogout(): boolean {
    this.loginService.logout();
    return false;
  }
}
