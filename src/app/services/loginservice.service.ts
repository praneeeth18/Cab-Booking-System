import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../models/user';
import { Booking } from '../models/booking';
import { Driver } from '../models/driver';

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

  // getUser(email: string, password: string): Observable<User> {
  //   return this.http.get<User>(
  //     `http://localhost:8080/user/${email}/${password}`
  //   );
  // }
  getUser(email: string, password: string): Observable<boolean> {
    return this.http
      .get<boolean>(`http://localhost:8080/users/${email}/${password}`)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getDriver(email: string, password: string): Observable<boolean> {
    return this.http
      .get<boolean>(`http://localhost:8080/driverDetails/${email}/${password}`)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getAdmin(email, password): Observable<boolean> {
    return this.http
      .get<boolean>(`http://localhost:8080/adminDetails/${email}/${password}`)
      .pipe(
        map((response) => {
          return response;
        })
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

  // getBookingById(email: string): Observable<Booking> {
  //   return this.http.get<Booking>(
  //     `http://localhost:8080/bookings?email=${email}`
  //   );
  // }

  // getBookingById(email: any): Observable<Booking> {
  //   return this.http.get<Booking>(`http://localhost:8080/bookings`, email);
  // }
  getBookingById(email: string) {
    return this.http.get(`http://localhost:8080/bookings/${email}`);
  }
  deleteBooking(email) {
    return this.http.delete(`http://localhost:8080/bookings`, email);
  }

  updateBooking(id: number, updatedBooking: Booking) {
    return this.http.put(
      `http://localhost:8080/bookings/${id}`,
      updatedBooking
    );
  }
}
