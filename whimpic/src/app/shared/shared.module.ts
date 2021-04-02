import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WpButtonComponent } from './components/wp-button/wp-button.component';
import { MangaCardComponent } from './components/manga-card/manga-card.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [WpButtonComponent, MangaCardComponent],
  imports: [CommonModule, NgbRatingModule],
  exports: [WpButtonComponent, MangaCardComponent]
})
export class SharedModule {}
