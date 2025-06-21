import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { user } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  userLogin(user: { username: string, password: string }) {
    return this.http.post(environment.baseUrl + `auth/login`, user)
  }

  createUser(user: {
    email: string,
    username: string,
    password: string,
    name: {
      firstname: string,
      lastname: string
    }
  }): Observable<any> {
    return this.http.post<any>(environment.baseUrl + 'users', user)
  }
}
