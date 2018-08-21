import { cloth1DetailPage } from './cloth1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    cloth1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(cloth1DetailPage),
  ],
  exports: [
    cloth1DetailPage
  ]
})

export class cloth1DetailPageModule { }
