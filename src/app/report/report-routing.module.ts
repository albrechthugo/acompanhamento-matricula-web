import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report.component';
import { ReportPdfComponent } from './report-pdf/report-pdf.component';

const reportRoutes: Routes = [
  { path: '', component: ReportComponent },
  { path: 'data', component: ReportPdfComponent }
];

@NgModule({
  imports: [RouterModule.forChild(reportRoutes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
