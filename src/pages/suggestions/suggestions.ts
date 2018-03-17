import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SuggestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suggestions',
  templateUrl: 'suggestions.html',
})
export class SuggestionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  items = [
    'Health insurance',
    'Life insurance',
    'Donations',
    'Financial products',
  ];

  itemSelected(item: string) {
    if ( item == this.items[3] ){
      console.log("Selected Item ", item);
      this.navCtrl.push('InvestmentsPage');
    } else {
      console.log("Selected Item", item);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuggestionsPage');
  }

}
