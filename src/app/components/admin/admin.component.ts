import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
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

  public user = new User();
  ngOnInit(): void {}
  onSubmit(adminForm: NgForm) {
    if (adminForm.valid) {
      this.service
        .getUser(this.user.email, this.user.password)
        .subscribe((data) => {
          alert('Logged in as Admin!');
          this.router.navigateByUrl('/adminHome');
        });
    } else {
      alert('Invalid email/password!!');
    }
  }

  // public adminForm = this.fb.group({
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('[a-z0-9._%+-]+@[dxc]+.[a-z]{2,}$'),
  //   ]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
  //   ]),
  // });

  // get email() {
  //   return this.adminForm.get('email');
  // }
  // get password() {
  //   return this.adminForm.get('password');
  // }
}
