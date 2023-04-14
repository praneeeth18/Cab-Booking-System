import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { CabdriverloginComponent } from './components/cabdriverlogin/cabdriverlogin.component';
import { BookingComponent } from './components/booking/booking.component';
import { DriverhomeComponent } from './components/driverhome/driverhome.component';
import { BookinghistoryComponent } from './components/bookinghistory/bookinghistory.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminLogin', component: AdminComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'driverLogin', component: CabdriverloginComponent },
  { path: 'driverHome', component: DriverhomeComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'bookingHistory', component: BookinghistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
