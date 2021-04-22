import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './../../validators/validators';

export class EmployeeForm {

  public get name(): AbstractControl | null {
    return this._form.get('name');
  }

  public get cpf(): AbstractControl | null {
    return this._form.get('cpf');
  }

  public get email(): AbstractControl | null {
    return this._form.get('email');
  }

  public get role(): AbstractControl | null {
    return this._form.get('phone');
  }

  public get form(): FormGroup {
    return this._form;
  }

  private _form: FormGroup;

  constructor(fb: FormBuilder) {
    this._form = fb.group({
      name: [null, Validators.required],
      cpf: [null, [Validators.required, MyValidators.validateCpf]],
      email: [null, [Validators.required, Validators.email]],
      role: [null, Validators.required]
    });
  }
}
