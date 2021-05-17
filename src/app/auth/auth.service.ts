import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { UserDto } from './../entities/user/user-dto';

@Injectable()
export class AuthService {

  private get baseUrl(): string {
    return environment.API_URL;
  }

  constructor(private http: HttpClient) { }

  post(user: UserDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/sessions`, user, { observe: 'response' });
  }
}
