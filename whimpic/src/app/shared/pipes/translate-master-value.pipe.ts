import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'translateMasterValue'
})
export class TranslateMasterValuePipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(value: any): string {
    if (this.translateService.currentLang === 'es') {
      return value.esTranslation;
    } else {
      return value.enTranslation;
    }
  }
}
