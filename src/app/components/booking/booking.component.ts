import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}

  public cabBookingForm = this.fb.group({
    source: new FormControl('', [Validators.required]),
    destination: new FormControl('', [Validators.required]),
    car: new FormControl('', [Validators.required]),
  });

  onBook() {
    if (this.cabBookingForm.valid) {
      console.log(this.cabBookingForm.value);
    } else {
      alert('Enter valid details!');
    }
  }

  get source() {
    return this.cabBookingForm.get('firstname');
  }
  get destination() {
    return this.cabBookingForm.get('lastname');
  }
  get car() {
    return this.cabBookingForm.get('email');
  }
}
