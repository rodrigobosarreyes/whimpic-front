import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HomePage, HeaderComponent],
  imports: [CommonModule, HomeRoutingModule, FontAwesomeModule]
})
export class HomeModule {}
