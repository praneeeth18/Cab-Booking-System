import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-cabdriverlogin',
  templateUrl: './cabdriverlogin.component.html',
  styleUrls: ['./cabdriverlogin.component.css'],
})
export class CabdriverloginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: LoginserviceService
  ) {}
  ngOnInit(): void {}

  public driver = new Driver();
  // onSubmit(form: NgForm) {
  //   if (form.valid) {
  //     //   this.service.addUser(this.user).subscribe((data) => {
  //     alert('You have login successfully!');
  //     this.router.navigateByUrl('/driverHome');
  //     //   });
  //   } else {
  //     alert('Login unsuccessful!!');
  //   }
  // }

  onSubmit(form: NgForm) {
    // Check if the form is valid
    if (form.valid) {
      // Call the getUser method from the login service to validate the user
      this.driver = form.value;
      this.service.getDriver(this.driver.email, this.driver.password).subscribe(
        (response) => {
          localStorage.setItem('email', this.driver.email);
          alert('You have logged in successfully!');
          this.router.navigateByUrl('/driverHome');
        },
        (error) => {
          if (error.status === 404) {
            alert('Invalid email/password');
          } else {
            console.error(error);
          }
        }
      );
    } else {
      alert('Invalid Email/Password');
    }
  }
}
