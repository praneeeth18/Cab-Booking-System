import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/booking';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css'],
})
export class BookinghistoryComponent implements OnInit {
  constructor(
    private bookingService: LoginserviceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getBookingById();
  }
  isLoggedIn = true;
  public email: string = localStorage.getItem('email');
  public bookings;

  getBookingById() {
    this.bookingService.getBookingById(this.email).subscribe(
      (data) => {
        this.bookings = data;
        // console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  cancelRide(booking: Booking) {
    booking.status = 'Cancelled';
    this.bookingService
      .updateBooking(booking.bookingId, booking)
      .subscribe((data) => {
        // console.log(data);
        alert('Booking is cancelled!!');
      });
  }

  logout() {
    localStorage.removeItem('email');
    alert('Successfully Logged Out!');
    this.router.navigateByUrl('/login');
  }
}
