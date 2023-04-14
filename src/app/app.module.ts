import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { CabdriverloginComponent } from './components/cabdriverlogin/cabdriverlogin.component';
import { BookingComponent } from './components/booking/booking.component';
import { DriverhomeComponent } from './components/driverhome/driverhome.component';
import { BookinghistoryComponent } from './components/bookinghistory/bookinghistory.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    LoginComponent,
    AdminComponent,
    FooterComponent,
    CabdriverloginComponent,
    BookingComponent,
    DriverhomeComponent,
    BookinghistoryComponent,
    AdminHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
