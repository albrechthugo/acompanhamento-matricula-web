import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentReportStatusPipe } from './student-report-status.pipe';

@NgModule({
  declarations: [StudentReportStatusPipe],
  exports: [StudentReportStatusPipe],
  imports: [
    CommonModule
  ]
})
export class StudentReportStatusModule { }
