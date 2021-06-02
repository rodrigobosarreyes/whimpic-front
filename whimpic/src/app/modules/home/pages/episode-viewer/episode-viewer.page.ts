import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { IMangaEpisode, IMangaSeason } from '../../models/manga.model';
import { MangaService } from '../../services/manga.service';

@Component({
  selector: 'app-episode-viewer',
  templateUrl: './episode-viewer.page.html',
  styleUrls: ['./episode-viewer.page.scss']
})
export class EpisodeViewerPage implements OnInit, OnDestroy {
  currentScene = 1;
  episode: IMangaEpisode;
  mangaId: number;
  episodes: IMangaEpisode[] = [];
  volumes: IMangaSeason[] = [];
  volume: IMangaSeason = {} as IMangaSeason;
  mangaName: string;
  private route: ActivatedRouteSnapshot;

  constructor(private mangaService: MangaService, activatedRoute: ActivatedRoute) {
    this.route = activatedRoute.snapshot;
  }

  ngOnInit(): void {
    this.mangaId = this.route.params.mangaId;
    const volumeId = Number(this.route.params.volumeId);
    this.currentScene = Number(this.route.params.scene);
    const episodeId = Number(this.route.params.episodeId);

    this.mangaService.getManga(this.mangaId).subscribe((manga) => (this.mangaName = manga.originalName.toLowerCase().replace('!', '')));

    this.mangaService.getMangaEpisode(volumeId, episodeId).subscribe((s) => {
      this.episode = s;
    });
    this.mangaService.getSeasonEpisodes(this.mangaId, false).subscribe((volumes: IMangaSeason[]) => {
      this.volumes = volumes;
      if (this.volumes && this.volumes.length > 0) {
        this.volume = volumes.find((_v) => _v.id === volumeId);
      }
    });
    this.mangaService.getMangaEpisodes(volumeId).subscribe((epis: IMangaEpisode[]) => {
      this.episodes = epis;
    });
  }

  onClickPrevious(): void {
    this.smoothScroll();
    if (this.currentScene > 1) {
      this.currentScene -= 1;
    }
  }

  onClickNext(): void {
    this.smoothScroll();
    if (this.currentScene < this.episode.pagesCount) {
      this.currentScene += 1;
    } else {
      if (this.episode.episodeNumber === this.episodes[this.episodes.length - 1].episodeNumber) {
        const index = this.volumes.findIndex((v) => v.seasonNumber === this.volume.seasonNumber + 1);
        if (index > -1) {
          this.onChangeVolume(this.volumes[index]);
        }
      } else {
        // Next chapter
        this.currentScene = 1;
        const nextEpisode = this.episodes.find((e) => e.episodeNumber === this.episode.episodeNumber + 1);
        this.mangaService.getMangaEpisode(this.volume.id, nextEpisode.id).subscribe((s) => {
          this.episode = s;
        });
      }
    }
  }

  smoothScroll(): void {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  onChangeChapter(chapter): void {
    this.episode = chapter;
    this.currentScene = 1;
  }

  onChangeValueControlbar(newValue: string): void {
    this.currentScene = Number(newValue);
  }

  onChangeVolume(volume: IMangaSeason): void {
    this.volume = volume;
    this.mangaService.getMangaEpisodes(volume.id).subscribe((e) => {
      this.episodes = e;
      this.episode = e[0];
      this.currentScene = 1;
    });
  }

  ngOnDestroy(): void {
    const index = this.volumes.findIndex((v) => v.seasonNumber === this.volume.seasonNumber + 1);
    const isFinished = index === -1;
    this.mangaService.saveUserEpisodeViewed(this.mangaId, this.episode.id, isFinished, this.currentScene, this.volume.id).subscribe();
  }
}
