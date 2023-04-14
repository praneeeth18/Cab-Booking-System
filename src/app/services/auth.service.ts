import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean = false;

  constructor() {}

  public setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
