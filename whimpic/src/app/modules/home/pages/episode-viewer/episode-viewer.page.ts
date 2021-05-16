import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { IMangaEpisode, IMangaSeason } from '../../models/manga.model';
import { MangaService } from '../../services/manga.service';

@Component({
  selector: 'app-episode-viewer',
  templateUrl: './episode-viewer.page.html',
  styleUrls: ['./episode-viewer.page.scss']
})
export class EpisodeViewerPage implements OnInit {
  currentScene = 1;
  episode: IMangaEpisode;
  mangaId: number;
  volumeId: number;
  episodeId: number;
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
    this.volumeId = Number(this.route.params.volumeId);
    this.currentScene = Number(this.route.params.scene);
    this.episodeId = Number(this.route.params.episodeId);

    this.mangaService.getManga(this.mangaId).subscribe((manga) => (this.mangaName = manga.originalName.toLowerCase().replace('!', '')));

    this.mangaService.getMangaEpisode(this.volumeId, this.episodeId).subscribe((s) => {
      this.episode = s;
    });
    // this.mangaService.getMangaVolumes(this.mangaId, false)
    //   .subscribe( v => {
    //     this.volumes = v;
    //     this.volume = v.find( _v => _v.uid === this.volumeId );
    //     // this.volume = v[0];
    //   });
    // this.mangaService.getVolumeChapters(this.volumeId)
    //   .subscribe( e => {
    //     this.episodes = e;
    //   });
    this.mangaService.getSeasonEpisodes(this.mangaId, false).subscribe((volumes: IMangaSeason[]) => {
      this.volumes = volumes;
      if (this.volumes && this.volumes.length > 0) {
        this.volume = volumes.find((_v) => _v.id === this.volumeId);
      }
    });
    this.mangaService.getMangaEpisodes(this.volumeId).subscribe((epis: IMangaEpisode[]) => {
      this.episodes = epis;
    });
  }

  onClickPrevious(): void {
    if (this.currentScene > 1) {
      this.currentScene -= 1;
    }
  }

  onClickNext(): void {
    if (this.currentScene < this.episode.pagesCount) {
      this.currentScene += 1;
    } else {
      if (this.episode.episodeNumber === this.episodes.length) {
        // const index = this.volumes.findIndex( v => v.uid === this.volume.uid);
        // this.onChangeVolume(this.volumes[index + 1]);
      } else {
        // Next chapter
        this.currentScene = 1;
        this.episodeId += 1;
        this.mangaService.getMangaEpisode(this.volumeId, this.episodeId).subscribe((s) => {
          this.episode = s;
        });
      }
    }
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
}
