import { jewelry1DetailPage } from './jewelry1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    jewelry1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(jewelry1DetailPage),
  ],
  exports: [
    jewelry1DetailPage
  ]
})

export class jewelry1DetailPageModule { }
