import {NavParams, Platform, ViewController} from "ionic-angular";
import {Component} from "@angular/core";

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
      <ion-item>
        <ion-avatar item-start>
          <img src="{{character.image}}">
        </ion-avatar>
        <h2>{{character.name}}</h2>
        <p>{{character.quote}}</p>
      </ion-item>
      <ion-item *ngFor="let item of character['items']">
        {{item.title}}
        <ion-note item-end>
          {{item.note}}
        </ion-note>
      </ion-item>
  </ion-list>
</ion-content>
`
})
export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    let characters = [
      {
        name: 'RAIFFEISEN',
        quote: 'Pension Invest Futura',
        image: 'assets/imgs/why-taxes.jpeg',
        items: [
          { title: 'Risk', note: 'low' },
          { title: 'Composition', note: 'list required' },
          { title: 'Selection', note: 'Sam' },
          { title: 'Proposition', note: 'Sam' },
          { title: 'Potential', note: 'Sam' },
          { title: 'Gain', note: 'Sam' },
        ]

      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
