import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from './core/services/core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'whimpic';

  constructor(translate: TranslateService, coreService: CoreService) {
    translate.addLangs(['es', 'en']);
    const lang = coreService.getCurrentLanguage();
    translate.setDefaultLang(lang);
    translate.use(lang);
  }
}
