import { electronic1DetailPage } from './electronic1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    electronic1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(electronic1DetailPage),
  ],
  exports: [
    electronic1DetailPage
  ]
})

export class electronic1DetailPageModule { }
