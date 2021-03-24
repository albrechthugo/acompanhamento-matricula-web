import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public chartData: any;

  constructor() { }

  ngOnInit(): void {
    this.setChartData();
  }

  private setChartData(): void {
    this.chartData = {
      labels: ['MATRICULADOS', 'PENDENTES', 'DESISTENCIAS'],
      datasets: [
        {
          label: 'Oi',
          backgroundColor: '#f22',
          data: [56, 5, 30]
        },
      ]
    };
  }
}
