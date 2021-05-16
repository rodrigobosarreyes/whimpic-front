import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WpButtonComponent } from './components/wp-button/wp-button.component';
import { MangaCardComponent } from './components/manga-card/manga-card.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateMasterValuePipe } from './pipes/translate-master-value.pipe';

@NgModule({
  declarations: [WpButtonComponent, MangaCardComponent, TranslateMasterValuePipe],
  imports: [CommonModule, NgbRatingModule],
  exports: [WpButtonComponent, MangaCardComponent, TranslateMasterValuePipe]
})
export class SharedModule {}
