import { DateUtils } from './../../utils/date-utils';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, ReplaySubject } from 'rxjs';
import { StudentReportDto } from '../../entities/student/report/student-report-dto';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private get baseUrl(): string {
    return environment.API_URL;
  }

  public studentsReport = new ReplaySubject<StudentReportDto[]>(1);
  public studentsReportSubject = this.studentsReport.asObservable();

  constructor(private http: HttpClient) { }

  getReport(startDate: Date, endDate: Date): Observable<StudentReportDto[]> {
    return this.http.get<StudentReportDto[]>(`${this.baseUrl}/reports/student/?startDate=${startDate}&endDate=${endDate}`);
  }

  getDashboardReport(): Observable<StudentReportDto[]> {
    const endDate = new Date();
    const startDate = DateUtils.getOneMonthBack();
    return this.http.get<StudentReportDto[]>(`${this.baseUrl}/reports/student/?startDate=${startDate}&endDate=${endDate}`);
  }
}
