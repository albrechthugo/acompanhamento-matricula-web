import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeDto } from '../entities/employee/employee-dto';
import { EmployeeService } from '../services/employee/employee.service';
import { RolesUtils } from '../utils/roles-utils';
import { EmployeeForm } from './../shared/forms/employee/employee.form';

@Component({
  selector: 'app-registration-request',
  templateUrl: './registration-request.component.html',
  styleUrls: ['./registration-request.component.css']
})
export class RegistrationRequestComponent implements OnInit {

  get employee(): EmployeeDto {
    return {
      name: this.employeeForm.name?.value,
      cpf: this.employeeForm.cpf?.value,
      email: this.employeeForm.email?.value,
      role: this.employeeForm.role?.value
    };
  }

  public employeeForm: EmployeeForm;

  private rolesutils = new RolesUtils();
  public roles: any[] = [];

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employeeForm = new EmployeeForm(this.fb);
  }

  ngOnInit(): void {
    this.setRoles();
  }

  private setRoles(): void {
    this.roles = this.rolesutils.roles;
  }

  public registration(): void {
    if (this.employeeForm.form.valid) {
      this.employeeService.create(this.employee)
        .subscribe(() => console.log(this.employee, 'Sucess employee registration!'));
    }
  }

}
