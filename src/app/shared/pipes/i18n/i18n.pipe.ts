import { Roles } from './../../../entities/employee/roles/roles-enum';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'i18n'
})
export class I18nPipe implements PipeTransform {

  transform(value: Roles): string {
    switch (value) {
      case Roles.CORRECTOR:
        return 'CORRETOR';
      case Roles.FINANCE:
        return 'FINANCEIRO';
      case Roles.MARKET_RELATIONSHIP:
        return 'RELAÇÃO MERCADO';
      case Roles.SECRETARY:
        return 'SECRETARIA';
      case Roles.VESTIBULAR_SUPPORT:
        return 'APOIO VESTIBULAR';
      default:
        return 'ADMINISTRAÇÃO';
    }
  }

}
