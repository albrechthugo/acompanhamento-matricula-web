import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { EmployeeDto } from '../../entities/employee/employee-dto';
import { EmployeeService } from '../../services/employee/employee.service';
import { MenuUtils } from '../../utils/menu-utils';
import { MessageUtils } from '../../utils/message-utils';
import { RolesUtils } from '../../utils/roles-utils';
import { Utils } from '../../utils/utils';
import { EmployeeForm } from './../../shared/forms/employee/employee.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  get employee(): EmployeeDto {
    return {
      name: this.employeeForm.name?.value,
      cpf: Utils.noMaskCpf(this.employeeForm.cpf?.value),
      email: this.employeeForm.email?.value,
      role: this.employeeForm.role?.value,
    };
  }

  public employeeForm: EmployeeForm;
  public tabItems: MenuItem[] = [];
  public roles: any[] = [];
  public canBlockUi = false;
  private menuUtils = new MenuUtils();
  private rolesutils = new RolesUtils();

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private messageService: MessageService
  ) {
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

  public onCpfNewValue(cpf: string): void {
    if (cpf.length === 11) {
      this.employeeForm.cpf?.setValue(Utils.formatCpf(cpf));
    }
  }

  public registration(): void {
    if (this.employeeForm.form.valid) {
      this.canBlockUi = true;
      this.employeeService.create(this.employee).subscribe(
        () => {
          this.canBlockUi = false;
          this.messageService.add(MessageUtils.EmployeeSuccessRegistration());
          setTimeout(
            () => this.router.navigateByUrl('/admin/solicitacoes'),
            1000
          );
        },
        () => {
          this.canBlockUi = false;
          this.messageService.add(MessageUtils.EmployeeErrorRegistration());
        }
      );
    }
  }
}
