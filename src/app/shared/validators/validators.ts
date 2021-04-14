import { FormControl, ValidationErrors } from '@angular/forms';
import { isValidCPF } from '@brazilian-utils/brazilian-utils';

export class MyValidators {
  static validateCpf(control: FormControl): ValidationErrors | null {
    return isValidCPF(control.value) ? null : { cpf: false };
  }
}

