import { Component, OnInit } from '@angular/core';
import { StudentReportDto } from '../../entities/student/report/student-report-dto';
import { ReportService } from '../../services/report/report.service';

@Component({
  selector: 'app-report-pdf',
  templateUrl: './report-pdf.component.html',
  styleUrls: ['./report-pdf.component.css']
})
export class ReportPdfComponent implements OnInit {

  public studentsReport: StudentReportDto[] = [];
  public rangeDate: any;

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.subscribeStudentReports();
  }

  private subscribeStudentReports(): void {
    this.reportService.studentsReportSubject.subscribe(response => {
      this.studentsReport = response.students;
      this.rangeDate = {
        startDate: response.startDate,
        endDate: response.endDate,
      };
    });
  }
}
