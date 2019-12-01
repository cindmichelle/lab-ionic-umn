import {Booking} from './../../../../bookings/booking.model';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-booking-item',
  templateUrl: './booking-item.component.html',
  styleUrls: ['./booking-item.component.scss'],
})
export class BookingItemComponent implements OnInit {
  @Input() booking: Booking;

  constructor() {}

  ngOnInit() {}
}
