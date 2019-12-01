import {PlacesService} from './../../places.service';
import {Place} from './../../place.model';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

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
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        return;
      }
      this.loadedPlace = this.placesService.getPlace(paramMap.get('placeId'));
      console.log('PLACE ID : ', this.loadedPlace);
    });
  }

  goBack() {
    this.navCtrl.navigateBack('/places/tabs/discover');
  }
}
