import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}

  public registerForm = this.fb.group({
    firstname: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]{3,}'),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]{3,}'),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
    ]),
  });

  get firstname() {
    return this.registerForm.get('firstname');
  }
  get lastname() {
    return this.registerForm.get('lastname');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
}
