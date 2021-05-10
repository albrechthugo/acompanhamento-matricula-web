import { Observable } from 'rxjs';
import { UserDto } from './../entities/user/user-dto';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private get baseUrl(): string {
    return environment.API_URL;
  }

  constructor(private http: HttpClient) { }

  post(user: UserDto): Observable<any> {
    return this.http.post<any>(this.baseUrl, user, { observe: 'response' });
  }
}
