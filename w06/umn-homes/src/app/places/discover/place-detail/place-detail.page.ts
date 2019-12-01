import {CreateBookingComponent} from './../../../bookings/create-booking/create-booking.component';
import {PlacesService} from './../../places.service';
import {Place} from './../../place.model';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {
  NavController,
  ModalController,
  ActionSheetController,
} from '@ionic/angular';

type ModalMode = 'select' | 'random';
@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  loadedPlace: Place;
  constructor(
    router: Router,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.loadedPlace = this.placesService.getPlace(paramMap.get('placeId'));
      console.log('PLACE ID : ', this.loadedPlace);
    });
  }

  async bookPlace() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
          handler: () => {
            this.openBookingModal('select');
          },
        },
        {
          text: 'Random Date',
          handler: () => {
            this.openBookingModal('random');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  openBookingModal(mode: ModalMode) {
    console.log(mode);
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: {selectedPlace: this.loadedPlace},
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((resultData) => {
        console.log(resultData);
        if (resultData.role === 'confirm') {
          console.log('BOOKED');
        }
      });
  }
  // onBookPlace() {
  //   this.modalCtrl
  //     .create({
  //       component: CreateBookingComponent,
  //       componentProps: {selectedPlace: this.loadedPlace},
  //     })
  //     .then((modalEl) => {
  //       modalEl.present();
  //       return modalEl.onDidDismiss();
  //     })
  //     .then((resultData) => {
  //       console.log(resultData.data, resultData.role);
  //       if (resultData.role === 'confirm') {
  //         console.log('BOOKED');
  //       }
  //     });
  // }
  goBack() {
    this.navCtrl.navigateBack('/places/tabs/discover');
  }
}
