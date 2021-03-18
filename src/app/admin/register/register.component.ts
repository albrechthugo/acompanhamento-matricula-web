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

  form = new FormGroup({
    name: new FormControl(),
    cpf: new FormControl(),
    email: new FormControl(),
    role: new FormControl()
  });

  menuItems: MenuItem[] = [];
  menuUtils = new MenuUtils();
  rolesutils = new RolesUtils();
  roles: any[] = [];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.roles = this.rolesutils.roles;
    this.menuItems = this.menuUtils.menuItems;
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
        .subscribe(() => {
          this.router.navigateByUrl('/admin/solicitacoes');
        });
    }
  }
}
