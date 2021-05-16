import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateMasterValue'
})
export class TranslateMasterValuePipe implements PipeTransform {
  transform(value: any): string {
    return value.esTranslation;
  }
}
