import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMangaSuggestion } from '../models/manga-suggestion.model';
import { IManga, IMangaDetail, IMangaEpisode, IMangaSeason, ISeasonEpisode } from '../models/manga.model';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  private readonly END_POINT_URL = 'api/manga/';
  private readonly GET_MANGA_SUGGESTIONS = this.END_POINT_URL + 'sug';
  private readonly GET_MANGA_DETAIL_URL = this.END_POINT_URL + 'detail/';
  private readonly GET_SEASON_EPISODES = this.END_POINT_URL + 'seasons/';
  private readonly GET_EPISODE = this.END_POINT_URL + 'episode/';
  private readonly GET_MANGA = this.END_POINT_URL + 'manga/';
  private readonly GET_MANGA_EPISODES = this.END_POINT_URL + 'episodes/';

  constructor(private http: HttpClient) {}

  /**
   * getMangaSuggestions
   */
  public getMangaSuggestions(filter: any): Observable<IMangaSuggestion[]> {
    return this.http.get<IMangaSuggestion[]>(this.GET_MANGA_SUGGESTIONS);
  }

  public getMangaDetail(mangaId: number): Observable<IMangaDetail> {
    return this.http.get<IMangaDetail>(this.GET_MANGA_DETAIL_URL + mangaId);
  }

  public getSeasonEpisodes(mangaId: number, showEpisodes: boolean): Observable<ISeasonEpisode[] | IMangaSeason[]> {
    return this.http.get<ISeasonEpisode[] | IMangaSeason[]>(`${this.GET_SEASON_EPISODES + mangaId}/${showEpisodes}`);
  }

  public getMangaEpisode(seasonId: number, episodeNumber: number): Observable<IMangaEpisode> {
    return this.http.get<IMangaEpisode>(`${this.GET_EPISODE}${seasonId}/${episodeNumber}`);
  }

  public getManga(mangaId: number): Observable<IManga> {
    return this.http.get<IManga>(`${this.GET_MANGA + mangaId}`);
  }

  public getMangaEpisodes(seasonId: number): Observable<IMangaEpisode[]> {
    return this.http.get<IMangaEpisode[]>(`${this.GET_MANGA_EPISODES + seasonId}`);
  }
}
