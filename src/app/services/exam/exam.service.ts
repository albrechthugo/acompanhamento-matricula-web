import { ExamDto } from './../../entities/exam/exam-dto';
import { StudentDto } from './../../entities/student/student-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private get baseUrl(): string {
    return environment.API_URL;
  }

  constructor(private http: HttpClient) { }

  create(exam: ExamDto): Observable<ExamDto> {
    return this.http.get<ExamDto>(`${this.baseUrl}/exams`);
  }

  getExamByStudent(student: StudentDto): Observable<StudentDto> {
    return this.http.get<StudentDto>(`${this.baseUrl}/exams/student/${student.cpf}`);
  }

  upload(files: File[], cpf: string): Observable<any> {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('file', file);
    });

    return this.http.post(`${environment.API_URL}/exams/student/${cpf}`, formData);
  }
}
