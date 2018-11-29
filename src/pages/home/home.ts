import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActividadPage } from '../actividad/actividad';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pushPage: any;
  constructor(public navCtrl: NavController) {
    this.pushPage = ActividadPage;
  }
 
}
