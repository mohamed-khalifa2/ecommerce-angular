import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { userView } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUser(id: string): Observable<userView> {
    return this.http.get<userView>(environment.baseUrl + `users/${id}`)
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
