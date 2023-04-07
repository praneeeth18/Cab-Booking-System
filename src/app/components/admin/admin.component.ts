import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}

  public adminForm = this.fb.group({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[dxc]+.[a-z]{2,}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
    ]),
  });

  get email() {
    return this.adminForm.get('email');
  }
  get password() {
    return this.adminForm.get('password');
  }
}
