import { accessories1DetailPage } from './accessories1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    accessories1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(accessories1DetailPage),
  ],
  exports: [
    accessories1DetailPage
  ]
})

export class accessories1DetailPageModule { }
