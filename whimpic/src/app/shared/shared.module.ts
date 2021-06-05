import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WpButtonComponent } from './components/wp-button/wp-button.component';
import { MangaCardComponent } from './components/manga-card/manga-card.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateMasterValuePipe } from './pipes/translate-master-value.pipe';
import { WpLoadingComponent } from './components/wp-loading/wp-loading.component';

@NgModule({
  declarations: [WpButtonComponent, MangaCardComponent, TranslateMasterValuePipe, WpLoadingComponent],
  imports: [CommonModule, NgbRatingModule],
  exports: [WpButtonComponent, MangaCardComponent, TranslateMasterValuePipe, WpLoadingComponent]
})
export class SharedModule {}
