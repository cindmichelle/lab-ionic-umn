import {IonItemSliding, ToastController} from '@ionic/angular';
import {Booking} from './../../../bookings/booking.model';
import {BookingService} from './../../../bookings/booking.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  bookings: Booking[];

  constructor(
    private bookingService: BookingService,
    private toastCtrl: ToastController,
  ) {}

  ngOnInit() {
    this.bookings = this.bookingService.bookings;
  }

  ionViewDidLoad() {
    this.bookings = this.bookingService.bookings;
  }

  deleteBooking(id: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.bookingService.deleteBooking(id);
    this.presentToast();
    this.ngOnInit();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Booking has been deleted.',
      duration: 2000,
    });
    toast.present();
  }
}
