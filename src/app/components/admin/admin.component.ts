import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/user-login';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: LoginserviceService,
    private router: Router
  ) {}

  public user = new UserLogin();
  ngOnInit(): void {}
  // onSubmit(adminForm: NgForm) {
  //   if (adminForm.valid) {
  //     this.service
  //       .getUser(this.user.email, this.user.password)
  //       .subscribe((data) => {
  //         alert('Logged in as Admin!');
  //         this.router.navigateByUrl('/adminHome');
  //       });
  //   } else {
  //     alert('Invalid email/password!!');
  //   }
  // }

  onSubmit(form: NgForm) {
    // Check if the form is valid
    if (form.valid) {
      // Call the getUser method from the login service to validate the user
      this.user = form.value;
      this.service.getAdmin(this.user.email, this.user.password).subscribe(
        (response) => {
          localStorage.setItem('email', this.user.email);
          alert('You have logged in successfully!');
          this.router.navigateByUrl('/adminHome');
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
