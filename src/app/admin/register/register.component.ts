import { EmployeeForm } from './../../shared/forms/employee/employee.form';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { MenuUtils } from '../../utils/menu-utils';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../../shared/validators/validators';
import { RolesUtils } from '../../utils/roles-utils';
import { EmployeeDto } from '../../entities/employee/employee-dto';
import { EmployeeService } from '../../services/employee/employee.service';
import { Router } from '@angular/router';
import { MessageUtils } from '../../utils/message-utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  get employee(): EmployeeDto {
    return {
      name: this.employeeForm.name?.value,
      cpf: this.employeeForm.cpf?.value,
      email: this.employeeForm.email?.value,
      role: this.employeeForm.role?.value,
    };
  }

  public employeeForm: EmployeeForm;
  public tabItems: MenuItem[] = [];
  public roles: any[] = [];
  private menuUtils = new MenuUtils();
  private rolesutils = new RolesUtils();

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private messageService: MessageService) {
      this.employeeForm = new EmployeeForm(this.fb);
    }

  ngOnInit(): void {
    this.setRoles();
    this.setTabItems();
  }

  private setTabItems(): void {
    this.tabItems = this.menuUtils.adminTabItems;
  }

  private setRoles(): void {
    this.roles = this.rolesutils.roles;
  }

  public registration(): void {
    if (this.employeeForm.form.valid) {
      this.employeeService.create(this.employee)
        .subscribe(() => {
          this.messageService.add(MessageUtils.EmployeeSuccessRegistration());
          setTimeout(() => this.router.navigateByUrl('/admin/solicitacoes'), 1000);
        }, () => {
          this.messageService.add(MessageUtils.EmployeeErrorRegistration());
        });
    }
  }
}
