import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ReportService } from '../services/report/report.service';
import { MessageUtils } from '../utils/message-utils';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  public form = new FormGroup({
    startDate: new FormControl(null, Validators.required),
    endDate: new FormControl(null, Validators.required)
  });

  public canBlockUi = false;

  constructor(private reportService: ReportService,
              private router: Router,
              private messageService: MessageService) { }

  public downloadFile(): void {
    if (this.form.valid) {
      this.canBlockUi = true;
      const rangeDate = {
        startDate: new Date(this.form?.get('startDate')?.value),
        endDate: new Date(this.form?.get('endDate')?.value)
      };
      this.reportService.getReport(rangeDate.startDate, rangeDate.endDate)
        .subscribe(students => {
          this.canBlockUi = false;
          this.reportService.studentsReport.next({students, startDate: rangeDate.startDate, endDate: rangeDate.endDate});
          this.router.navigate(['relatorioMatriculas/data']);
        }, () => {
          this.canBlockUi = false;
          this.messageService.add(MessageUtils.GetInfoError());
        });
    }
  }
}
