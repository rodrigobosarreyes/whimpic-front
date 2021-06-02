import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  actionSuggestions$: Observable<IMangaSuggestion[]>;
  fantasySuggestions$: Observable<IMangaSuggestion[]>;
  continueSuggestions$: Observable<IMangaSuggestion[]>;

  constructor(private mangaService: MangaService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.lastSuggestions$ = this.mangaService.getMangaSuggestions('recommended');
    this.actionSuggestions$ = this.mangaService.getMangaSuggestions('genre.action');
    this.fantasySuggestions$ = this.mangaService.getMangaSuggestions('genre.fantasy');
    this.continueSuggestions$ = this.mangaService.getMangaSuggestions('continue');
  }

  onClickManga(manga: IMangaSuggestion): void {
    this.router.navigate(['detail', manga.mangaId], { relativeTo: this.route });
  }
}
