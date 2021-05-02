import { Component, Input } from '@angular/core';
import { IMangaSuggestion } from 'src/app/modules/home/models/manga-suggestion.model';

@Component({
  selector: 'wp-manga-card',
  templateUrl: './manga-card.component.html',
  styleUrls: ['./manga-card.component.scss']
})
export class MangaCardComponent {
  @Input() suggestion: IMangaSuggestion;
}
