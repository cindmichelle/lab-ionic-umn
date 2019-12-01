import {Injectable} from '@angular/core';
import {Place} from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Gading Apartment',
      '2BR, Luas dan Cozy',
      'https://wp.zillowstatic.com/naked-apartments/wp-content/uploads/sites/1/2018/09/GettyImages-922780178-ef6060.jpg',
      1000000000,
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartment Romantis',
      'https://i2.wp.com/masbadar.com/wp-content/uploads/2016/03/Tiny-Room-Apartemen-Inetrior-Design-Ideas-04.jpg?fit=577%2C433&ssl=1',
      1250000000,
    ),
    new Place(
      'p3',
      'BSD Apartment',
      'Aparment murah',
      'https://s-ec.bstatic.com/images/hotel/max1024x768/647/64756199.jpg',
      500000000,
    ),
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    const selectedPlace = this._places.find((place) => id === place.id);
    return selectedPlace;
  }
  constructor() {}
}
