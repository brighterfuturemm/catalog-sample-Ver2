import { phone1DetailPage } from './phone1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    phone1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(phone1DetailPage),
  ],
  exports: [
    phone1DetailPage
  ]
})

export class phone1DetailPageModule { }
