import { Pipe, PipeTransform } from '@angular/core';
import { DocumentEnum } from '../../../entities/document/document-enum';

@Pipe({
  name: 'documentType'
})
export class DocumentTypePipePipe implements PipeTransform {

  transform(type: string): string {
    switch (type) {
      case DocumentEnum.ID:
        return 'IDENTIFICAÇÃO';
      case DocumentEnum.PROOF_OF_ADDRESS:
        return 'COMPROVANTE RESIDÊNCIA';
      case DocumentEnum.SCHOOL_RECORDS:
        return 'HISTÓRICO ESCOLAR';
      case DocumentEnum.VOTER_REGISTRATION:
        return 'TÍTULO ELEITORAL';
      case DocumentEnum.BIRTH_CERTIFICATE:
        return 'CERTIDÃO DE NASCIMENTO';
      default:
        return '';
    }
  }

}
