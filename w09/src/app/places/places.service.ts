import {AuthService} from './../auth/auth.service';
import {Injectable} from '@angular/core';
import {Place} from './place.model';
import {BehaviorSubject} from 'rxjs';
import {take, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  constructor(private authService: AuthService) {}
  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1',
      'Gading Apartment',
      '2BR, Luas dan Cozy',
      'http://www.desertsun.co.uk/blog/images/Apartment%201.jpg',
      100000000,
      new Date('2019-01-01'),
      new Date('2020-12-31'),
      'abc',
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartemen Romantis',
      'https://static3.businessinsider.com/image/5681799ce6183e55008b526d-480/carmel-place-nyc-micro-apartment.jpg',
      125000000,
      new Date('2019-01-01'),
      new Date('2020-12-31'),
      'abc',
    ),
    new Place(
      'p3',
      'BSD Apartment',
      'Apartemen Murah',
      'https://lh3.googleusercontent.com/-F5aY6yinaiA/TW_NzlRJppI/AAAAAAAAABo/fewLnztPeDU/s1600/apartment+building+designs...jpg',
      50000000,
      new Date('2019-01-01'),
      new Date('2020-12-31'),
      'abc',
    ),
  ]);

  get places() {
    return this._places.asObservable();
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date,
  ) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://images1.apartments.com/i2/P0s3lHrhIIPXfyhkVz0wMZXOqFj2m3Rg_Pa-OdKQIQk/111/the-500-atlanta-ga-refined-apartment-living---elite-upgrade.jpg',
      price,
      dateFrom,
      dateTo,
      this.authService.userId,
    );

    this.places.pipe(take(1)).subscribe((places) => {
      setTimeout(() => {
        this._places.next(places.concat(newPlace));
      }, 1000);
    });
  }

  getPlace(id: string) {
    // return {...this._places.find((p) => p.id === id)};
    return this.places.pipe(
      take(1),
      map((places) => {
        return {...places.find((p) => p.id === id)};
      }),
    );
  }
}
