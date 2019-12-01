import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {Home2Page} from './home2.page';
import {NewBookingPage} from './new-booking/new-booking.page';

const routes: Routes = [
  {
    path: '',
    component: Home2Page,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [Home2Page, NewBookingPage],
  entryComponents: [NewBookingPage],
})
export class Home2PageModule {}
