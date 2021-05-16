import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { IMangaDetail, IMangaEpisode, ISeasonEpisode } from '../../models/manga.model';
import { MangaService } from '../../services/manga.service';

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

  constructor(private mangaService: MangaService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.route = activatedRoute.snapshot;
  }

  ngOnInit(): void {
    this.mangaService.getMangaDetail(this.route.params.mangaId).subscribe((m) => {
      this.manga = m;
    });
    this.mangaService.getSeasonEpisodes(this.route.params.mangaId, true).subscribe((volumes: ISeasonEpisode[]) => {
      this.volumes = volumes;
      if (this.volumes && this.volumes.length > 0) {
        this.volumeSelected = this.volumes[0];
      }
    });
  }

  onClickRead(): void {
    //
  }

  onClickEpisode(volumeId: number, episode: IMangaEpisode): void {
    this.router.navigate(['episode', this.manga.id, volumeId, episode.episodeNumber, 1], { relativeTo: this.activatedRoute.parent });
  }

  onChangeSeason(season: ISeasonEpisode): void {
    this.volumeSelected = season;
  }
}
