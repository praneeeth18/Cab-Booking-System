import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/booking';
import { User } from 'src/app/models/user';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: LoginserviceService,
    private router: Router
  ) {}

  public user: User;
  public booking: Booking;
  public clicked: boolean | undefined;
  ngOnInit(): void {
    this.user = new User();
    this.booking = new Booking();
  }

  isLoggedIn = true;

  public email: string;

  onBooking(form: NgForm) {
    // Check if the form is valid
    if (form.valid) {
      // Call the addBooking method form the login service to add the booking details
      //     this.service.addBooking(form.value).subscribe();
      //     alert('Your cab is booked!!');
      //     this.router.navigateByUrl('/bookingHistory');
      this.email = localStorage.getItem('email');
      this.booking = form.value;
      this.booking.email = this.email;
      this.booking.status = 'Pending';
      console.log(this.booking);
      this.service.addBooking(this.booking).subscribe((data) => {
        console.log(data);
      });
      alert('Your cab is booked!!');
      this.router.navigateByUrl('/bookingHistory');
    }
  }

  getPrice(form: NgForm) {
    if (form.valid) {
      this.booking.price = Math.round(1200 + Math.random() * 500);
      this.clicked = true;
    }
  }

  logout() {
    localStorage.removeItem('email');
    alert('Successfully Logged Out!');
    this.router.navigateByUrl('/login');
  }
}
