import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { MangaCardComponent } from 'src/app/shared/components/manga-card/manga-card.component';
import { IMangaSuggestion } from '../../models/manga-suggestion.model';

@Component({
  selector: 'app-mangas-collection',
  templateUrl: './mangas-collection.component.html',
  styleUrls: ['./mangas-collection.component.scss']
})
export class MangasCollectionComponent {
  @ViewChild('mangasContainer') mangasContainer: ElementRef<HTMLDivElement>;
  @ViewChildren(MangaCardComponent, { read: ElementRef }) mangaCards: QueryList<ElementRef<HTMLElement>>;
  // @ViewChildren(MangaCardComponent) mangaCards: QueryList<MangaCardComponent>;
  @Input() sectionTitle: string;
  @Input() suggestions: IMangaSuggestion[];

  @Output() clickManga = new EventEmitter<IMangaSuggestion>();
  faArrowRight = faChevronRight;
  faArrowLeft = faChevronLeft;
  showLeft = false;
  showRight = true;

  onClickManga(manga: IMangaSuggestion): void {
    this.clickManga.emit(manga);
  }

  onClickNavigator(direction: 'left' | 'right'): void {
    const cardWidth = 138;
    if (direction === 'left') {
      this.mangasContainer.nativeElement.scroll({ left: this.mangasContainer.nativeElement.scrollLeft - cardWidth, behavior: 'smooth' });
    } else if (direction === 'right') {
      this.mangasContainer.nativeElement.scroll({ left: this.mangasContainer.nativeElement.scrollLeft + cardWidth, behavior: 'smooth' });
    }
  }

  onScrollContainer(): void {
    const cardWidth = 138;
    const actualScroll = this.mangasContainer.nativeElement.scrollLeft;
    const scrollMax = this.mangasContainer.nativeElement.scrollWidth - this.mangasContainer.nativeElement.clientWidth;
    if (actualScroll + cardWidth / 2 < scrollMax) {
      this.showRight = true;
    } else {
      this.showRight = false;
    }
    this.showLeft = actualScroll !== 0;
  }
}
