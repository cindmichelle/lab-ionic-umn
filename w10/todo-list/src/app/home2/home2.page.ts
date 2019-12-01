import {NewBookingPage} from './new-booking/new-booking.page';
import {Booking, BookingsService} from './bookings.service';
import {Component, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {
  private bookings: Booking[] = [];

  constructor(
    private bookingSvc: BookingsService,
    private alertController: AlertController,
    private modalController: ModalController,
  ) {}

  ngOnInit() {}

  getBookings() {
    this.bookingSvc.fetchBookings().subscribe((bookings) => {
      console.log(bookings);
    });
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Delete a Booking',
      inputs: [
        {
          name: 'bookingId',
          type: 'text',
          placeholder: 'Enter your booking ID',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm cancel');
          },
        },
        {
          text: 'Ok',
          handler: (data) => {
            this.bookingSvc.deleteBooking(data.bookingId).subscribe(() => {
              this.bookingSvc.fetchBookings().subscribe((bookings) => {
                console.log(bookings);
              });
              console.log('DELETED');
            });
          },
        },
      ],
    });

    await alert.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: NewBookingPage,
    });
    return await modal.present();
  }

  newBooking() {
    this.presentModal();
  }

  deleteBooking() {
    this.presentAlertPrompt();
  }
}
