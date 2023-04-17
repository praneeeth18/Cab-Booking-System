import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.getBookingById(this.email);
  }
  isLoggedIn = true;
  public email: string = localStorage.getItem('email');
  public bookings;
  getBookingById(email) {
    this.bookingService.getBookingById(this.email).subscribe((data) => {
      this.bookings = data;
    });
  }
  logout() {
    localStorage.removeItem('email');
    alert('Successfully Logged Out!');
    this.router.navigateByUrl('/login');
  }
}
