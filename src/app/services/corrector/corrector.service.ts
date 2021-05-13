import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CorrectedExamDto } from 'src/app/entities/grade/corrected-exam-dto';

@Injectable({
  providedIn: 'root'
})
export class CorrectorService {

  private get baseUrl(): string {
    return environment.API_URL;
  }

  constructor(private http: HttpClient) { }

  sendCorrection(correctedExam: CorrectedExamDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/grades`, correctedExam);
  }
}
