import { bag1DetailPage } from './bag1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    bag1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(bag1DetailPage),
  ],
  exports: [
    bag1DetailPage
  ]
})

export class bag1DetailPageModule { }
