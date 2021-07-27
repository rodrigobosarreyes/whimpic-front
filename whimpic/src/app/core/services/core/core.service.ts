import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private API_URL = 'api/core';
  constructor(private http: HttpClient, private translateService: TranslateService) {}

  getBrowserLanguage(): string {
    const lang = navigator.language.slice(0, 2);
    const langs = this.translateService.langs;

    if (langs.find((v) => v === lang)) {
      return lang;
    } else {
      return 'en';
    }
  }

  getCurrentLanguage(): string {
    let lang = this.translateService.currentLang;
    if (!lang) {
      lang = JSON.parse(sessionStorage.getItem('USER_DATA')).language;
    }
    return lang ? lang : this.getBrowserLanguage();
  }

  changeLanguage(): void {
    const userData = JSON.parse(sessionStorage.getItem('USER_DATA'));
    this.translateService.use(userData.language);
  }

  getMangasHost(): Observable<string> {
    return this.http.get<string>(`${this.API_URL}/host`);
  }
}
