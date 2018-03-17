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
        <h2>{{character.bank}}</h2>
        <p>{{character.name}}</p>
      </ion-item>
    <ion-item>Risk<ion-note item-end>low</ion-note></ion-item>
    <ion-item>Composition<ion-note item-end>worldwide<br/>shares<br/> bonds <br/>currencies</ion-note></ion-item>
    <ion-item>Selection<ion-note item-end>ecological<br/>social <br/> ethical</ion-note></ion-item>
    <ion-item>Proposition<ion-note item-end>100 CHF / month</ion-note></ion-item>
    <ion-item>Potential Gain<ion-note item-end>5 years -> X <br/> 10 years -> Y </ion-note></ion-item>
    <!--
      <ion-item *ngFor="let item of character['items']">
        {{item.title}}
        <ion-note item-end *ngFor="let note of item.note">
          {{note}}
        </ion-note>
      </ion-item>
  -->
    
    
  </ion-list>
  

  <ion-footer align="center">
    <ion-item>
      <ion-icon name="alert" item-start></ion-icon>
        Considered as 3rd pillar <br/>Tax deduction of X CHF
    </ion-item>
    
    <button class="btn" block ion-button>Buy</button>
  </ion-footer>
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

    //const newline = "<br\>";

    let characters = [
      {
        bank: 'RAIFFEISEN',
        name: 'Pension Invest Futura',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Risk', note: 'low' },
          { title: 'Composition', note: 'list required' },
          { title: 'Selection', note: 'Sam, Sam,' },
          { title: 'Proposition', note: '100 CHF / month' },
          { title: 'Potential Gain', note: ["5 years - > X", "< 10 years -> Y"] },
          { title: 'Cost', note: 'Sam' },

        ],
        info: [

          // place info text
          // place button : Buy
        ]

      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
