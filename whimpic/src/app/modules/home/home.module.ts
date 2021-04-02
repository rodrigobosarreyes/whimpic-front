import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { MangasCollectionComponent } from './components/mangas-collection/mangas-collection.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomePage, HomeNavbarComponent, MangasCollectionComponent],
  imports: [CommonModule, HomeRoutingModule, FontAwesomeModule, NgbModule, SharedModule, TranslateModule.forChild({ extend: true })]
})
export class HomeModule {}
