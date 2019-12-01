import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'details',
    loadChildren:
      './pages/todo-details/todo-details.module#TodoDetailsPageModule',
  },
  {
    path: 'details/:id',
    loadChildren:
      './pages/todo-details/todo-details.module#TodoDetailsPageModule',
  },
  { path: 'home2', loadChildren: './home2/home2.module#Home2PageModule' },
  { path: 'new-booking', loadChildren: './home2/new-booking/new-booking.module#NewBookingPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
