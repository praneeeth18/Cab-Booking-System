import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: LoginserviceService,
    private router: Router,
    private logout: AuthService
  ) {}

  public user = new User();

  ngOnInit(): void {}

  onSubmit(loginForm: NgForm) {
    // Check if the form is valid
    if (loginForm.valid) {
      // Call the getUser method from the login service to validate the user
      this.service
        .getUser(this.user.email, this.user.password)
        .subscribe((data) => {
          alert('You have login successfully!');
          this.router.navigateByUrl('/booking');
        });
    } else {
      alert('Invalid Email/Password');
    }
  }
}
