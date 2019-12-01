import {Router} from '@angular/router';
import {Component} from '@angular/core';

import {Platform, MenuController} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public menuCtrl: MenuController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  navigateToDiscover() {
    this.router.navigateByUrl('/places/tabs/discover');
    this.menuCtrl.close();
  }
  navigateToBookings() {
    this.router.navigateByUrl('/places/tabs/offers');
    this.menuCtrl.close();
  }
}
