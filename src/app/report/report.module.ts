import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WidgetModule } from '../shared/components/widget/widget.module';
import { ReportPdfModule } from './report-pdf/report-pdf.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    InputTextModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
    ReportPdfModule,
    ToastModule,
    BlockUIModule,
    ProgressSpinnerModule
  ],
  providers: [MessageService]
})
export class ReportModule { }
