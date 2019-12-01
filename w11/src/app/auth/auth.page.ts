import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {SignUpComponent} from './sign-up/sign-up.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private authSvc: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {}

  onLogin(f: NgForm) {
    // this.authSvc.login(f.value.email, f.value.pwd);
    this.authSvc.login(f.value.email, f.value.pwd).subscribe(
      (resp) => {
        if (resp.idToken) {
          console.log('response : ', resp);
          this.router.navigateByUrl('/home');
        } else {
          console.log('login failed.');
        }
      },
      (errorResp) => {
        console.log('errorResp', errorResp);
      },
    );

    // this.router.navigateByUrl('/home');
  }

  async presentSignUpModal() {
    const modal = await this.modalCtrl.create({
      component: SignUpComponent,
    });
    return await modal.present();
  }
}
