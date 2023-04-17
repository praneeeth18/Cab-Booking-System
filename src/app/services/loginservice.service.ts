import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../models/user';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root',
})
export class LoginserviceService {
  constructor(private http: HttpClient) {}

  addUser(user: User) {
    return this.http.post(`http://localhost:8080/addUser`, user);
  }

  getUsers(): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/users`);
  }

  getUser(email, password): Observable<User> {
    return this.http.get<User>(
      `http://localhost:8080/users?email=${email}&password=${password}`
    );
  }

  getUserById(email) {
    return this.http.get<User>(`http://localhost:8080/users?email=${email}`);
  }

  updateUser(id) {
    return this.http.put(`http://localhost:8080/users/${id}`, User);
  }

  deleteUser(id) {
    return this.http.delete(`http://localhost:8080/users/${id}`);
  }

  getAdmin(email, password): Observable<User> {
    return this.http.get<User>(
      `http://localhost:8080/adminDetails?email=${email}&password=${password}`
    );
  }

  // addBooking(userId: number, booking: Booking): Observable<User> {
  //   return this.http.post<User>(
  //     `http://localhost:8080/users/${userId}/bookings`,
  //     booking
  //   );
  // }

  addBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(`http://localhost:8080/addBooking`, booking);
  }

  getBookings(): Observable<Booking> {
    return this.http.get<Booking>(`http://localhost:8080/bookings`);
  }

  getBookingById(email: string): Observable<Booking> {
    return this.http.get<Booking>(
      `http://localhost:8080/bookings?email=${email}`
    );
  }

  deleteBooking(id) {
    return this.http.delete(`http://localhost:8080/bookings/${id}`);
  }
}
