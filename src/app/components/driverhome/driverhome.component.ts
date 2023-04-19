import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/booking';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-driverhome',
  templateUrl: './driverhome.component.html',
  styleUrls: ['./driverhome.component.css'],
})
export class DriverhomeComponent implements OnInit {
  constructor(private service: LoginserviceService, private router: Router) {}
  ngOnInit(): void {
    this.getBookings();
  }
  isLoggedIn = true;

  public bookings;
  public booking: Booking;
  getBookings() {
    this.service.getBookings().subscribe((data) => {
      this.bookings = data;
    });
  }

  deleteBooking(email) {
    this.service.deleteBooking(email).subscribe((data) => {
      alert('Booking deleted successfully!!');
      this.getBookings();
    });
  }

  acceptBooking(booking: Booking) {
    booking.status = 'Accepted';
    this.service.updateBooking(booking.bookingId, booking).subscribe((data) => {
      console.log(data);
      // this.router.navigateByUrl('/driverHome');
      alert('Booking is Accepted!');
    });
  }

  rejectBooking(booking: Booking) {
    booking.status = 'Rejected';
    this.service.updateBooking(booking.bookingId, booking).subscribe((data) => {
      alert('Booking is Rejected');
    });
  }

  logout() {
    localStorage.removeItem('email');
    alert('Successfully Logged Out!');
    this.router.navigateByUrl('/');
  }
}
