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
import { HeaderComponent } from './components/header/header.component';
import { DetailPage } from './pages/detail/detail.page';
import { EpisodeViewerPage } from './pages/episode-viewer/episode-viewer.page';
import { EpisodeControlBarComponent } from './components/episode-control-bar/episode-control-bar.component';
import { EpisodeNavbarComponent } from './components/episode-navbar/episode-navbar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/core/interceptors/token/token.interceptor';
import { AuthGuard } from 'src/app/core/guards/auth/auth.guard';

@NgModule({
  declarations: [HomePage, HomeNavbarComponent, MangasCollectionComponent, HeaderComponent, DetailPage, EpisodeViewerPage, EpisodeControlBarComponent, EpisodeNavbarComponent],
  imports: [CommonModule, HomeRoutingModule, FontAwesomeModule, NgbModule, SharedModule, TranslateModule.forChild({ extend: true })],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class HomeModule {}
