import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee/employee.service';
import { EmployeeDto } from '../entities/employee/employee-dto';
import { RolesUtils } from '../utils/roles-utils';
import { MyValidators } from '../shared/validators/validators';

@Component({
  selector: 'app-registration-request',
  templateUrl: './registration-request.component.html',
  styleUrls: ['./registration-request.component.css']
})
export class RegistrationRequestComponent implements OnInit {

  get employee(): EmployeeDto {
    return {
      name: this.form.get('name')?.value,
      cpf: this.form.get('cpf')?.value,
      email: this.form.get('email')?.value,
      role: this.form.get('role')?.value
    };
  }

  form = new FormGroup({
    name: new FormControl(),
    cpf: new FormControl(),
    email: new FormControl(),
    role: new FormControl()
  });

  rolesutils = new RolesUtils();
  roles: any[] = [];

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.roles = this.rolesutils.roles;
    this.formBuilder();
  }

  formBuilder(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      cpf: [null, [Validators.required, MyValidators.validateCpf]],
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
