import {Booking} from './booking.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private _bookings: Booking[] = [
    new Booking('book1', 'p7', 'user1', 'Ruko Bolsena', 2),
    new Booking('book2', 'p8', 'user2', 'Scientia Residence', 8),
  ];

  get bookings() {
    return [...this._bookings];
  }

  deleteBooking(id: string) {
    this._bookings = this._bookings.filter((booking) => id !== booking.id);
  }
  constructor() {}
}
