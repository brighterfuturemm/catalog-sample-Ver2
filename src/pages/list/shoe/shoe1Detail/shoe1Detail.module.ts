import { shoe1DetailPage } from './shoe1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
	shoe1DetailPage,
  ],
  imports: [
	IonicPageModule.forChild(shoe1DetailPage),
  ],
  exports: [
    shoe1DetailPage
  ]
})

export class shoe1DetailPageModule { }
