import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IMangaDetail, IMangaEpisode, ISeasonEpisode } from '../../models/manga.model';
import { MangaService } from '../../services/manga.service';
import { faBookOpen, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss']
})
export class DetailPage implements OnInit {
  private route: ActivatedRouteSnapshot;
  manga: IMangaDetail;
  volumes: ISeasonEpisode[];
  volumeSelected: ISeasonEpisode;
  lastEpisode: { season: number; episode: number; page: number };
  faRead = faBookOpen;
  faCheck = faCheck;

  constructor(private mangaService: MangaService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.route = activatedRoute.snapshot;
  }

  ngOnInit(): void {
    const mangaId = this.route.params.mangaId;
    this.mangaService.getMangaDetail(mangaId).subscribe((m) => {
      this.manga = m;
    });
    this.mangaService.getSeasonEpisodes(mangaId, true).subscribe((volumes: ISeasonEpisode[]) => {
      this.volumes = volumes;
      if (this.volumes && this.volumes.length > 0) {
        this.volumeSelected = this.volumes[0];
      }
    });
    this.mangaService.getUserEpisodeViewed(mangaId).subscribe((p) => (this.lastEpisode = p));

    this.mangaService
      .getUserEpisodeViewed(mangaId)
      .pipe(
        switchMap((last) => {
          this.lastEpisode = last;
          return this.mangaService.getSeasonEpisodes(mangaId, true);
        })
      )
      .subscribe((volumes: ISeasonEpisode[]) => {
        this.volumes = volumes;
        if (this.volumes && this.volumes.length > 0) {
          if (this.lastEpisode) {
            const index = this.volumes.findIndex((v) => v.season.id === this.lastEpisode.season);
            this.volumeSelected = this.volumes[index];
            this._setFinishedEpisode(this.volumeSelected);
          } else {
            this.volumeSelected = this.volumes[0];
          }
        }
      });
  }
  private _setFinishedEpisode(volumeSelected: ISeasonEpisode): void {
    const lastEpisode = volumeSelected.episodes.find((e) => e.episodeNumber === this.lastEpisode.episode);
    if (lastEpisode) {
      this.volumeSelected.episodes.forEach((episode) => (episode.isFinished = episode.episodeNumber < lastEpisode.episodeNumber));
    } else {
      this.volumeSelected.episodes.forEach((episode) => (episode.isFinished = true));
    }
  }

  onClickRead(): void {
    if (this.lastEpisode) {
      this.router.navigate(['episode', this.manga.manga.id, this.lastEpisode.season, this.lastEpisode.episode, this.lastEpisode.page], { relativeTo: this.activatedRoute.parent });
    } else {
      this.router.navigate(['episode', this.manga.manga.id, this.volumes[0].season.id, this.volumes[0].episodes[0].episodeNumber, 1], { relativeTo: this.activatedRoute.parent });
    }
  }

  onClickEpisode(volumeId: number, episode: IMangaEpisode): void {
    let page = 1;
    if (this.lastEpisode && this.lastEpisode.episode === episode.id) {
      page = this.lastEpisode.page;
    }
    this.router.navigate(['episode', this.manga.manga.id, volumeId, episode.id, page], { relativeTo: this.activatedRoute.parent });
  }

  onChangeSeason(season: ISeasonEpisode): void {
    this.volumeSelected = season;
    const lastVolume = this.volumes.find((v) => v.season.id === this.lastEpisode.season);
    if (this.lastEpisode) {
      if (this.volumeSelected.season.seasonNumber < lastVolume.season.seasonNumber) {
        this._setFinishedEpisode(this.volumeSelected);
      }
    }
  }
}
