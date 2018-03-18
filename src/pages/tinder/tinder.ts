import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the TinderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'tinder-page'
})
@Component({
  selector: 'page-tinder',
  templateUrl: 'tinder.html',
})
export class TinderPage {

  questions: [Question] = [
    new Question("Do you still have the same address?\n [Schlossstrasse 108, 3008 Bern]", false),
    new Question("Do you still work for SIX Group AG?", false),
    new Question("Do you still have no children?", false),
    new Question("Are you still single?", false),
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  edit(item: Question) {
    item.confirmed = true;
  }

  confirm(item: Question) {
    item.confirmed = true;
    if (this.questions.filter(q => !q.confirmed).length == 0) {
      this.navCtrl.push('SuggestionsPage');
    }
  }
}


class Question {
  text: string;
  confirmed: boolean;


  constructor(text: string, confirmed: boolean) {
    this.text = text;
    this.confirmed = confirmed;
  }
}
