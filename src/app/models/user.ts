import { Booking } from './booking';

export class User {
  public userId: number;
  public firstname: string;
  public lastname: string;
  public email: string;
  public password: string;
  public bookings: Booking[];
}
