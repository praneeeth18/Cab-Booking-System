import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  constructor(private userService: LoginserviceService) {}
  ngOnInit(): void {
    this.getUsers();
  }

  public users;
  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  // deleteUser(id) {
  //   if (confirm('Please click OK to delete the user!!')) {
  //     this.userService.deleteUser(id).subscribe(() => {
  //       alert('User deleted successfully!');
  //       this.getUsers();
  //     });
  //   }
  // }
  deleteUser(id: number) {
    if (confirm('Please click OK to delete the user!!')) {
      this.userService.deleteUser(id).subscribe(
        (response) => {
          // console.log(response); // log the response to the console
          alert('User deleted successfully!');
          this.getUsers();
        },
        (error) => {
          console.log(error); // log the error to the console
          alert('Error deleting user!');
        }
      );
    }
  }
}
