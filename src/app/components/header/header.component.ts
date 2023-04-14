import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private logOut: AuthService, private router: Router) {}

  isLoggedIn = true;
  ngOnInit(): void {}

  logout() {
    this.router.navigateByUrl('/');
  }
}
