import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMangaSuggestion } from '../../models/manga-suggestion.model';
import { MangaService } from '../../services/manga.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/200`);

  lastSuggestions$: Observable<IMangaSuggestion[]>;

  constructor(private mangaService: MangaService) {}

  ngOnInit(): void {
    this.lastSuggestions$ = this.mangaService.getMangaSuggestions('');
  }
}
