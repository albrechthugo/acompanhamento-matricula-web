import { ReportService } from './../../services/report/report.service';
import { Component, OnInit } from '@angular/core';
import { StudentDto } from '../../entities/student/student-dto';
import { StudentService } from '../../services/student/student.service';
import { StudentStatusEnum } from '../../entities/student/status/student-status-enum';
import { MessageService } from 'primeng/api';
import { MessageUtils } from '../../utils/message-utils';
import { retry } from 'rxjs/operators';

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

  constructor(private reportService: ReportService,
              private studentService: StudentService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.setChartConfig();
    this.getReportData();
  }

  private setChartConfig(): void {
    this.chartData = {
      labels: ['MATRICULADOS', 'PENDENTES', 'DESISTÊNCIAS'],
      datasets: [{
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

  private getReportData(): void {
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
}
