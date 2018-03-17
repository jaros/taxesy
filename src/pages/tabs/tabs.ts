import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import {NavController} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;

  constructor(public navCtrl: NavController) {
  }

  gotoSuggestion() {
    console.log("to suggestions");
    this.navCtrl.push('SuggestionsPage');
  }

  gotoInvestment() {
    console.log("to investments");
    this.navCtrl.push('investments-page');
  }
}
