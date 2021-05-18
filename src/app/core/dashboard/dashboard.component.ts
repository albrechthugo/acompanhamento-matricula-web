import { ReportService } from './../../services/report/report.service';
import { Component, OnInit } from '@angular/core';
import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public chartData: any;

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.setChartConfig();
    this.getReportData();
  }

  private setChartConfig(): void {
    this.chartData = {
      labels: ['MATRICULADOS', 'PENDENTES', 'DESISTÊNCIAS'],
      datasets: [{ data: [30, 30, 40] }]
    };
  }

  private getReportData(): void {
    this.reportService.getDashboardReport().subscribe(() => {});
  }
}
