import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from './../../environments/environment.prod';
import { UserDto } from './../entities/user/user-dto';

@Injectable()
export class AuthService {

  private get baseUrl(): string {
    return environment.API_URL;
  }

  constructor(private http: HttpClient) { }

  public doLogin(user: UserDto): Observable<any> {
    return this.post(user).pipe(map((res: Response) => this.setUser(res.body)));
  }

  private post(user: UserDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/sessions`, user, { observe: 'response' });
  }

  private setUser(user: any): void {
    window.sessionStorage.setItem('token', user.password);
    window.sessionStorage.setItem('name', user.name);
    window.sessionStorage.setItem('role', user.role);
  }

  public getUser(): Observable<any> {
    return of({
      name: window.sessionStorage.getItem('name'),
      token: window.sessionStorage.getItem('token'),
      role: window.sessionStorage.getItem('role')
    });
  }

  public logout(): void {
    window.sessionStorage.clear();
  }
}
