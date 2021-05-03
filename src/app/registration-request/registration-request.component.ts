import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeDto } from '../entities/employee/employee-dto';
import { EmployeeService } from '../services/employee/employee.service';
import { RolesUtils } from '../utils/roles-utils';
import { EmployeeForm } from './../shared/forms/employee/employee.form';
import { Utils } from '../utils/utils';
import { MessageService } from 'primeng/api';
import { MessageUtils } from '../utils/message-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-request',
  templateUrl: './registration-request.component.html',
  styleUrls: ['./registration-request.component.css']
})
export class RegistrationRequestComponent implements OnInit {

  get employee(): EmployeeDto {
    return {
      name: this.employeeForm.name?.value,
      cpf: Utils.noMaskCpf(this.employeeForm.cpf?.value),
      email: this.employeeForm.email?.value,
      role: this.employeeForm.role?.value
    };
  }

  private rolesUtils = new RolesUtils();
  public employeeForm: EmployeeForm;
  public roles: any[] = [];
  public canBlockUi = false;

  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService,
              public messageService: MessageService,
              private router: Router) {
    this.employeeForm = new EmployeeForm(this.fb);
  }

  ngOnInit(): void {
    this.setRoles();
  }

  public onCpfNewValue(cpf: string): void {
    if (cpf.length === 11) {
      this.employeeForm.cpf?.setValue(Utils.formatCpf(cpf));
    }
  }

  private setRoles(): void {
    this.roles = this.rolesUtils.roles;
  }

  public registration(): void {
    if (this.employeeForm.form.valid) {
      this.canBlockUi = true;
      this.employeeService.create(this.employee)
        .subscribe(() => {
          this.canBlockUi = false;
          this.messageService.add(MessageUtils.RegistrationRequestSuccess());
          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 700);
        }, () => {
          this.canBlockUi = false;
          this.messageService.add(MessageUtils.RegistrationRequestError());
        });
    }
  }

}
