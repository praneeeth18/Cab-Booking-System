import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: LoginserviceService,
    private router: Router
  ) {}

  public user: User;

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmit(form: NgForm) {
    // Check if the form is valid
    if (form.valid) {
      // Call the addUser method from the login service to add the user
      this.service.addUser(form.value).subscribe(
        (data) => {
          alert('You have registered successfully!');
          // console.log(data);
          this.router.navigateByUrl('/');
        },
        (error) => {
          console.log('Error:', error);
          alert('There was an error registering your account.');
        }
      );
    }
  }
}
