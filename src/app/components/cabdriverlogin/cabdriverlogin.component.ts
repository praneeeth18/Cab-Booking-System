import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-cabdriverlogin',
  templateUrl: './cabdriverlogin.component.html',
  styleUrls: ['./cabdriverlogin.component.css'],
})
export class CabdriverloginComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {}

  public user = new User();
  onSubmit(form: NgForm) {
    if (form.valid) {
      //   this.service.addUser(this.user).subscribe((data) => {
      alert('You have login successfully!');
      this.router.navigateByUrl('/driverHome');
      //   });
    } else {
      alert('Login unsuccessful!!');
    }
  }

  // public driverloginForm = this.fb.group({
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
  //   ]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
  //   ]),
  // });

  // get email() {
  //   return this.driverloginForm.get('email');
  // }
  // get password() {
  //   return this.driverloginForm.get('password');
  // }
}
