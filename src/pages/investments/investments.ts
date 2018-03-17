import {Component} from '@angular/core';
import {IonicPage, ModalController} from 'ionic-angular';
import {ModalContentPage} from "./modalcontent";

/**
 * Generated class for the InvestmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-investments',
  templateUrl: 'investments.html',
})
export class InvestmentsPage {

  constructor(public modalCtrl: ModalController) {
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvestmentsPage');
  }
}
