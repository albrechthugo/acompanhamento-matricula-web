import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { EmployeeDto } from '../../entities/employee/employee-dto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  get baseUrl(): string {
    return environment.API_URL;
  }

  constructor(private http: HttpClient) { }

  create(employee: EmployeeDto): Observable<EmployeeDto> {
    return this.http.post<EmployeeDto>(`${this.baseUrl}/employees`, employee);
  }
}
