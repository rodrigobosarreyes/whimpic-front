import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMangaSuggestion } from '../models/manga-suggestion.model';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  private readonly END_POINT_URL = 'api/manga/';
  private readonly GET_MANGA_SUGGESTIONS = this.END_POINT_URL + 'sug';

  constructor(private http: HttpClient) {}

  /**
   * getMangaSuggestions
   */
  public getMangaSuggestions(filter: any): Observable<IMangaSuggestion[]> {
    return this.http.get<IMangaSuggestion[]>(this.GET_MANGA_SUGGESTIONS);
  }
}
