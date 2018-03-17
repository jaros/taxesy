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
          <img src="{{character.image}}" style="padding:10px" >
        </ion-item>
    
        <ion-item style="font-weight: bold; font-size: 1.8em" >
          {{character.name}}
        </ion-item>
    
        <ion-item>Risk
          <ion-note item-end align="right" style="color:#090909">low</ion-note>
        </ion-item>
        <ion-item>Composition
          <ion-note item-end align="right" style="color:#090909">worldwide<br/>shares<br/> bonds<br/>currencies</ion-note>
        </ion-item>
        <ion-item>Selection
          <ion-note item-end align="right" style="color:#090909" >ecological<br/>social<br/>ethical</ion-note>
        </ion-item>
        <ion-item class="textitme">Proposition
          <ion-note item-end align="right" style="color:#090909" >100 CHF/month</ion-note>
        </ion-item>
        <ion-item align="left">Potential Gain
          <ion-note item-end align="right" style="color:#090909" >5 years -> X<br/> 10 years -> Y</ion-note>
        </ion-item>
      </ion-list>


      <ion-footer align="center">
        <ion-item>
          <ion-icon name="alert" item-start></ion-icon>
          Considered as 3rd pillar <br/>Tax deduction of X CHF
        </ion-item>

        <button class="btn" block ion-button>Buy</button>
      </ion-footer>
    </ion-content>
  `,
 // selector: 'context-home',
})
export class ModalContentPage {
  character;

  constructor(public platform: Platform,
              public params: NavParams,
              public viewCtrl: ViewController) {

    //const newline = "<br\>";

    let characters = [
      {
        name: 'Pension Invest Futura',
        image: 'assets/imgs/logo_credit_suisse.png',
      },
      {
        name: 'Pension Invest Futura',
        image: 'assets/imgs/logo_ubs.png',
      },
      {
        name: 'Pension Invest Futura',
        image: 'assets/imgs/logo_raiffeisen.png',
      },


    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
