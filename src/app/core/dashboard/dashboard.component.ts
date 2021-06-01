import { ReportService } from './../../services/report/report.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { retry } from 'rxjs/operators';
import { StudentStatusEnum } from '../../entities/student/status/student-status-enum';
import { StudentDto } from '../../entities/student/student-dto';
import { StudentService } from '../../services/student/student.service';
import { MessageUtils } from '../../utils/message-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public frozenColumn: any;
  public chartData: any;
  public chartOptions: any;
  public students: StudentDto[] = [];
  public canBlockUi = false;
  private pendingStudents: StudentDto[] = [];
  private canceledStudents: StudentDto[] = [];
  private completedStudents: StudentDto[] = [];

  constructor(private studentService: StudentService,
              private messageService: MessageService,
              private reportService: ReportService,
              private router: Router) { }

  ngOnInit(): void {
    this.setChartConfig();
    this.getChartData();
  }

  private setChartConfig(): void {
    this.chartData = {
      labels: ['MATRICULADOS', 'PENDENTES', 'DESISTÊNCIAS'],
      datasets: [{
        label: 'MATRICULADOS' ,
        backgroundColor: ['#8E1291', '#FF641A', '#FF0000'],
        data: [
          this.completedStudents.length,
          this.pendingStudents.length,
          this.canceledStudents.length
        ]
      }]
    };

    this.chartOptions = {
      scales: {
        yAxes:  [{
            ticks: {
                min: 0,
                max: 1000
            }
        }]
    }
    };
  }

  private getChartData(): void {
    this.canBlockUi = true;
    this.studentService.getAll().subscribe(students => {
      this.students = students;
      this.completedStudents = students.filter(student => student.studentStatus === StudentStatusEnum.COMPLETED_REGISTRATION);
      this.pendingStudents = students.filter(student => student.studentStatus === StudentStatusEnum.PENDING_REGISTRATION);
      this.canceledStudents = students.filter(student => student.studentStatus === StudentStatusEnum.CANCELED_REGISTRATION);
      this.setChartConfig();
      this.canBlockUi = false;
    }, () => {
      this.messageService.add(MessageUtils.GetInfoError());
      retry();
    });
  }

  public getReport(): void {
    this.canBlockUi = true;
    this.reportService.getDashboardReport().subscribe(students => {
      this.canBlockUi = false;
      this.reportService.studentsReport.next({
        students,
        startDate: null,
        endDate: null,
        isDashboardReport: true
      });
      this.router.navigate(['relatorioMatriculas/data']);
    }, () => { });
  }
}
