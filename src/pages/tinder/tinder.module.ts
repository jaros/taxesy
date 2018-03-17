import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TinderPage } from './tinder';

@NgModule({
  declarations: [
    TinderPage,
  ],
  imports: [
    IonicPageModule.forChild(TinderPage),
  ],
  exports: [
    TinderPage
  ]
})
export class TinderPageModule {}
