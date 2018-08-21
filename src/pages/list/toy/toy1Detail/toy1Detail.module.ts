import { toy1DetailPage } from './toy1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
	toy1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(toy1DetailPage),
  ],
  exports: [
    toy1DetailPage
  ]
})

export class toy1DetailPageModule { }
