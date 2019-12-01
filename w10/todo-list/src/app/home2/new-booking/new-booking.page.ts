import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../bookings.service';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.page.html',
  styleUrls: ['./new-booking.page.scss'],
})
export class NewBookingPage implements OnInit {
  constructor(
    private modalController: ModalController,
    private bookingsSvc: BookingsService,
  ) { }

  ngOnInit() { }

  closeModal() {
    this.modalController.dismiss(null, 'cancel');
  }

  addNewBooking(f: NgForm) {
    console.log('TEST');

    this.bookingsSvc
      .insertBooking({
        'booking_name': f.value.bookingName,
        'topic': f.value.topic,
        'details': f.value.details,
        'booking_date': f.value.bookingDate,
        'start_hour': f.value.startHour,
        'end_hour': f.value.endHour,
        'creator': f.value.creator,
      })
      .subscribe(() => {
        this.bookingsSvc.fetchBookings().subscribe((bookings) => {
          console.log(bookings);
        });

        console.log('INSERTED');
        this.closeModal();
      });
  }
}
