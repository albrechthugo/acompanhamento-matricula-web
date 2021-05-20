import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportPdfComponent } from './report-pdf.component';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StudentReportStatusModule } from '../../shared/pipes/student-report-status/student-report-status.module';
import { DatePipeModule } from '../../shared/pipes/date/date.module';

@NgModule({
  declarations: [ReportPdfComponent],
  exports: [ReportPdfComponent],
  imports: [
    CommonModule,
    TableModule,
    ReactiveFormsModule,
    RouterModule,
    StudentReportStatusModule,
    DatePipeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReportPdfModule { }
