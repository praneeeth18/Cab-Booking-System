import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginserviceService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/users`);
  }

  getUser(email, password): Observable<User> {
    return this.http.get<User>(
      `http://localhost:8080/users?email=${email}&password=${password}`
    );
  }

  getUserById(id) {
    return this.http.get<User>(`http://localhost:8080/${id}`);
  }

  addUser(user: User) {
    return this.http.post(`http://localhost:8080/addUser`, user);
  }

  deleteUser(id) {
    return this.http.delete(`http://localhost:8080/users/${id}`);
  }

  updateUser(id) {
    return this.http.put(`http://localhost:8080/users/${id}`, User);
  }

  getAdmin(email, password): Observable<User> {
    return this.http.get<User>(
      `http://localhost:8080/adminDetails?email=${email}&password=${password}`
    );
  }
}
