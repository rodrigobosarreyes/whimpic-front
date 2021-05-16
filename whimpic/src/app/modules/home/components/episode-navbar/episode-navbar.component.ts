import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IMangaEpisode, IMangaSeason } from '../../models/manga.model';

@Component({
  selector: 'app-episode-navbar',
  templateUrl: './episode-navbar.component.html',
  styleUrls: ['./episode-navbar.component.scss']
})
export class EpisodeNavbarComponent {
  @Input() chapters: IMangaEpisode[];
  @Input() volumes: IMangaSeason[];
  @Input() currentVolume: IMangaSeason;
  @Input() currentChapter: IMangaEpisode;
  @Output() changeChapter = new EventEmitter<any>();
  @Output() changeVolume = new EventEmitter<any>();

  constructor(private router: Router) {}

  onClickLogo(): void {
    this.router.navigate(['/home']);
  }

  onClickChapter(scene: IMangaEpisode): void {
    this.currentChapter = scene;
    this.changeChapter.emit(scene);
  }

  onClickVolume(volume: IMangaSeason): void {
    this.currentVolume = volume;
    this.changeVolume.emit(volume);
  }
}
