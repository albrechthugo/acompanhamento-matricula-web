import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportService } from '../services/report/report.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MessageUtils } from '../utils/message-utils';
import { range } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public form = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl()
  });

  public canBlockUi = false;

  constructor(private fb: FormBuilder,
              private reportService: ReportService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.setForm();
  }

  private setForm(): void {
    this.form = this.fb.group({
      startDate: [null, Validators.required],
      endDate: [null, Validators.required]
    });
  }

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
          this.reportService.studentsReport.next(students);
          this.router.navigate(['relatorioMatriculas/data']);
        }, () => {
          this.canBlockUi = false;
          this.messageService.add(MessageUtils.GetInfoError());
        });
    }
  }
}
