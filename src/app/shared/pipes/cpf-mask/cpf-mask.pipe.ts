import { Pipe, PipeTransform } from '@angular/core';
import { formatCPF } from '@brazilian-utils/brazilian-utils';

@Pipe({
  name: 'cpfMask'
})
export class CpfMaskPipe implements PipeTransform {

  transform(cpf: string): string {
    return formatCPF(cpf, { pad: true });
  }

}
