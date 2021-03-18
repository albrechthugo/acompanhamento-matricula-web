import { EmployeeDto } from './../../entities/employee/employee-dto';
import { Router } from '@angular/router';
import { EmployeeService } from './../../services/employee/employee.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { MenuUtils } from './../../utils/menu-utils';
import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/entities/employee/status/status-enum';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  menuItems: MenuItem[] = [];
  actionItems: MenuItem[] = [];
  requestPending: EmployeeDto[] = [];
  private menuUtils = new MenuUtils();

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.menuItems = this.menuUtils.menuItems;
    this.getTotalRequestsPending();
  }

  getTotalRequestsPending(): void {
    this.employeeService.getAllPendingActivation().subscribe(requests => {
      this.requestPending = requests;
    });
  }

  activeEmployee(employee: EmployeeDto): void {
    this.employeeService.update(employee, Status.ACTIVE)
      .pipe(switchMap(() => this.employeeService.getAllPendingActivation()))
      .subscribe(requests => this.requestPending = requests);
  }

  deleteEmployee(employee: EmployeeDto): void {
    this.employeeService.delete(employee)
      .pipe(switchMap(() => this.employeeService.getAllPendingActivation()))
      .subscribe(requests => this.requestPending = requests);
  }

  confirm(employee: EmployeeDto, active?: boolean): void {
    this.confirmationService.confirm({
      message: active ? 'Ativar cadastro do funcionário?' : 'Deseja excluir a solicitação?',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      defaultFocus: 'accept',
      closeOnEscape: true,
      accept: () => active ? this.activeEmployee(employee) : this.deleteEmployee(employee),
      reject: () => this.confirmationService.close()
    });
  }

  setButtonActions(employee: EmployeeDto): void {
    this.actionItems = [{ label: 'Excluir', icon: 'pi pi-trash', command: () => this.confirm(employee) }];
  }
}
