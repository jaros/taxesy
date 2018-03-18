import {Component} from '@angular/core';
import {IonicPage, ModalController} from 'ionic-angular';
import {ModalContentPage} from "./modalcontent";
import {Modal} from "ionic-angular/components/modal/modal";

/**
 * Generated class for the InvestmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'investments-page'
})
@Component({
  selector: 'page-investments',
  templateUrl: 'investments.html',
})
export class InvestmentsPage {

  activeModal: Modal;

  constructor(public modalCtrl: ModalController) {
  }

  openModal(characterNum) {
    this.activeModal = this.modalCtrl.create(ModalContentPage, characterNum);
    this.activeModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvestmentsPage');
  }
}
