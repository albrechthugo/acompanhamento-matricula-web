import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { StudentDto } from './../../entities/student/student-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private get baseUrl(): string {
    return environment.API_URL;
  }

  constructor(private http: HttpClient) { }

  create(student: StudentDto): Observable<StudentDto> {
    return this.http.post<StudentDto>(`${this.baseUrl}/students`, student);
  }

  getById(cpf: string): Observable<StudentDto> {
    return this.http.get<StudentDto>(`${this.baseUrl}/students?cpf=${cpf}`);
  }
}
