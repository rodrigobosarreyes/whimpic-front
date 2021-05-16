import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMangaSuggestion } from '../../models/manga-suggestion.model';

@Component({
  selector: 'app-mangas-collection',
  templateUrl: './mangas-collection.component.html',
  styleUrls: ['./mangas-collection.component.scss']
})
export class MangasCollectionComponent {
  @Input() sectionTitle: string;
  @Input() suggestions: IMangaSuggestion[];

  @Output() clickManga = new EventEmitter<IMangaSuggestion>();

  onClickManga(manga: IMangaSuggestion): void {
    this.clickManga.emit(manga);
  }
}
