import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/user-login';
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
    // private service: AuthService,
    private service: LoginserviceService,
    private router: Router
  ) {}

  public user: UserLogin = new UserLogin();
  ngOnInit(): void {}

  onSubmit(loginForm: NgForm) {
    // Check if the form is valid
    if (loginForm.valid) {
      // Call the getUser method from the login service to validate the user
      // this.service
      //   .login(this.user.email, this.user.password)
      //   .subscribe((response) => {
      //     localStorage.setItem('token', response.token);
      //   });
      this.user = loginForm.value;
      console.log(this.user);
      localStorage.setItem('email', this.user.email);
      alert('You have login successfully!');
      this.router.navigateByUrl('/booking');
    } else {
      alert('Invalid Email/Password');
    }
  }
}
