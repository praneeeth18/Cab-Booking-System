export class Booking {
  public bookingId: number;
  public email: string;
  public source: string;
  public destination: string;
  public cabModel: string;
  public price: number;
  public status: string = 'Pending';
}
