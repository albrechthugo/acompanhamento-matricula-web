import { ReportService } from './../../services/report/report.service';
import { Component, OnInit } from '@angular/core';
import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public chartCategories: string[] = [];
  public chartType = PoChartType.Bar;
  public chartData: PoChartSerie[] = [];
  public chartOptions: PoChartOptions = {};

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.setChartConfig();
    this.getReportData();
  }

  private setChartConfig(): void {
    this.chartCategories = ['MATRICULADOS', 'PENDENTES', 'DESISTÊNCIAS'];
    this.chartData = [
      { data: [90], type: PoChartType.Column, color: '#8E1291' },
      { data: [50], type: PoChartType.Column, color: '#FF641A' },
      { data: [10], type: PoChartType.Column, color: '#FF0000' },
    ];
    this.chartOptions = {
      axis: {
        minRange: 0,
        maxRange: 1000,
      }
    };
  }

  private getReportData(): void {
    this.reportService.getDashboardReport().subscribe(() => {});
  }
}
