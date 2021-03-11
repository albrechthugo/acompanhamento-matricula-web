import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validateCpf } from '../shared/validators/validators';
import { EmployeeService } from '../services/employee/employee.service';
import { EmployeeDto } from '../entities/employee/employee-dto';
import { Roles } from '../entities/employee/roles/roles-enum';
import { RolesUtils } from '../utils/roles-utils';

@Component({
  selector: 'app-registration-request',
  templateUrl: './registration-request.component.html',
  styleUrls: ['./registration-request.component.css']
})
export class RegistrationRequestComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(),
    cpf: new FormControl(),
    email: new FormControl(),
    role: new FormControl()
  });

  get employee(): EmployeeDto {
    return {
      name: this.form.get('name')?.value,
      cpf: this.form.get('cpf')?.value,
      email: this.form.get('email')?.value,
      role: this.form.get('role')?.value
    };
  }

  public roles: RolesUtils[] = [
    { label: 'CORRETOR', value: Roles.CORRECTOR },
    { label: 'FINANCEIRO', value: Roles.FINANCE },
    { label: 'RELAÇÃO MERCADO', value: Roles.MARKET_RELATIONSHIP },
    { label: 'SECRETARIA', value: Roles.SECRETARY },
    { label: 'APOIO VESTIBULAR', value: Roles.VESTIBULAR_SUPPORT },
  ];

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.formBuilder();
  }

  formBuilder(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      cpf: [null, [Validators.required, validateCpf]],
      email: [null, [Validators.required, Validators.email]],
      role: [null, Validators.required]
    });
  }

  registration(): void {
    if (this.form.valid) {
      this.employeeService.create(this.employee)
        .subscribe(() => console.log(this.employee, 'Sucess employee registration!'));
    }
  }

}
