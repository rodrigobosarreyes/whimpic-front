import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';

@NgModule({
  declarations: [HomePage, HomeNavbarComponent],
  imports: [CommonModule, HomeRoutingModule, FontAwesomeModule]
})
export class HomeModule {}
