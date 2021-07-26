import { Status } from './../../entities/employee/status/status-enum';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { EmployeeDto } from '../../entities/employee/employee-dto';
import { DocumentEnum } from '../../entities/document/document-enum';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private get baseUrl(): string {
    return environment.API_URL;
  }

  constructor(private http: HttpClient) { }

  create(employee: EmployeeDto): Observable<EmployeeDto> {
    return this.http.post<EmployeeDto>(`${this.baseUrl}/employees`, employee);
  }

  update(employee: EmployeeDto, status: Status): Observable<EmployeeDto> {
    return this.http.put<EmployeeDto>(`${this.baseUrl}/employees/${employee.cpf}`, { employeeStatus: status });
  }

  delete(employee: EmployeeDto): Observable<EmployeeDto> {
    return this.http.delete<EmployeeDto>(`${this.baseUrl}/employees/${employee.cpf}`);
  }

  getAllPendingActivation(): Observable<EmployeeDto[]> {
    return this.http.get<EmployeeDto[]>(`${this.baseUrl}/employees`);
  }

  uploadDoc(docs: File[], docType: DocumentEnum, cpf: string): Observable<any> {
    const formData = new FormData();
    docs.forEach(doc => {
      formData.append('file', doc, doc.name);
    });

    return this.http.post(`${this.baseUrl}/employees/document/${docType}/student/${cpf}`, formData);
  }
}
