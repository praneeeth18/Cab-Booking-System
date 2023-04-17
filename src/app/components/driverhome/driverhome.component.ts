import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  getBookings() {
    this.service.getBookings().subscribe((data) => {
      this.bookings = data;
    });
  }

  logout() {
    localStorage.removeItem('email');
    alert('Successfully Logged Out!');
    this.router.navigateByUrl('/login');
  }
}
