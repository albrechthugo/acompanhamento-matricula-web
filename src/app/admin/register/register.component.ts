import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuUtils } from '../../utils/menu-utils';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../../shared/validators/validators';
import { RolesUtils } from '../../utils/roles-utils';
import { EmployeeDto } from '../../entities/employee/employee-dto';
import { EmployeeService } from '../../services/employee/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  get employee(): EmployeeDto {
    return {
      name: this.form.get('name')?.value,
      cpf: this.form.get('cpf')?.value,
      email: this.form.get('email')?.value,
      role: this.form.get('role')?.value
    };
  }

  public form = new FormGroup({
    name: new FormControl(),
    cpf: new FormControl(),
    email: new FormControl(),
    role: new FormControl()
  });

  public tabItems: MenuItem[] = [];
  public roles: any[] = [];
  private menuUtils = new MenuUtils();
  private rolesutils = new RolesUtils();

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.setRoles();
    this.setTabItems();
    this.formBuilder();
  }

  private formBuilder(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      cpf: [null, [Validators.required, MyValidators.validateCpf]],
      email: [null, [Validators.required, Validators.email]],
      role: [null, Validators.required]
    });
  }

  private setTabItems(): void {
    this.tabItems = this.menuUtils.adminTabItems;
  }

  private setRoles(): void {
    this.roles = this.rolesutils.roles;
  }

  public registration(): void {
    if (this.form.valid) {
      this.employeeService.create(this.employee)
        .subscribe(() => {
          this.router.navigateByUrl('/admin/solicitacoes');
        });
    }
  }
}
