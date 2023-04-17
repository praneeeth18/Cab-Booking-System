import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserLogin } from '../models/user-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string;

  constructor(private http: HttpClient) {}

  login(userLogin: UserLogin) {
    return this.http.post(`http://localhost:8080/login`, userLogin, {
      responseType: 'text',
    });
  }
}
