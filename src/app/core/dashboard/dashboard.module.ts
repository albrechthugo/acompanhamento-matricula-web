import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { RouterModule } from '@angular/router';
import {ChartModule} from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { PoChartModule } from '@po-ui/ng-components';

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
    PoChartModule
  ]
})
export class DashboardModule { }
