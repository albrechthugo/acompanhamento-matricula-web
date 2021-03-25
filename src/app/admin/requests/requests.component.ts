import { EmployeeDto } from './../../entities/employee/employee-dto';
import { Router } from '@angular/router';
import { EmployeeService } from './../../services/employee/employee.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { MenuUtils } from './../../utils/menu-utils';
import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/entities/employee/status/status-enum';
import { switchMap, tap } from 'rxjs/operators';
import { MessageUtils } from '../../utils/message-utils';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  public canBlockUi = true;
  public tabItems: MenuItem[] = [];
  public actionItems: MenuItem[] = [];
  public requestPending: EmployeeDto[] = [];
  private menuUtils = new MenuUtils();

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.setTabItems();
    this.getTotalRequestsPending();
  }

  private getTotalRequestsPending(): void {
    this.employeeService.getAllPendingActivation().subscribe(requests => {
      this.canBlockUi = false;
      this.requestPending = requests;
    });
  }

  private activeEmployee(employee: EmployeeDto): void {
    this.employeeService.update(employee, Status.ACTIVE)
      .pipe(
        tap(() => this.messageService.add(MessageUtils.EmployeeSuccessActive()),
          () => this.messageService.add(MessageUtils.EmployeeErrorActive())
        ),
        switchMap(() => this.employeeService.getAllPendingActivation())
      ).subscribe(requests => this.requestPending = requests);
  }

  private deleteEmployee(employee: EmployeeDto): void {
    this.employeeService.delete(employee)
      .pipe(
        tap(() => this.messageService.add(MessageUtils.EmployeeSuccessDelete()),
          () => this.messageService.add(MessageUtils.EmployeeErrorDelete())
        ),
        switchMap(() => this.employeeService.getAllPendingActivation()))
      .subscribe(requests => this.requestPending = requests);
  }

  public confirm(employee: EmployeeDto, active?: boolean): void {
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

  private setTabItems(): void {
    this.tabItems = this.menuUtils.adminTabItems;
  }

  public setButtonActions(employee: EmployeeDto): void {
    this.actionItems = [{ label: 'Excluir', icon: 'pi pi-trash', command: () => this.confirm(employee) }];
  }
}
