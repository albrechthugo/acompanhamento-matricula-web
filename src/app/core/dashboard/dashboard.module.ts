import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { RouterModule } from '@angular/router';
import {ChartModule} from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { StudentReportStatusModule } from '../../shared/pipes/student-report-status/student-report-status.module';
import { BlockUIModule } from 'primeng/blockui';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonModule,
    MenuModule,
    RouterModule,
    ChartModule,
    TableModule,
    ChartModule,
    StudentReportStatusModule,
    BlockUIModule,
    ToastModule,
    ProgressSpinnerModule
  ],
  providers: [MessageService]
})
export class DashboardModule { }
