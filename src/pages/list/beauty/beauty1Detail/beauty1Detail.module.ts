import { beauty1DetailPage } from './beauty1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    beauty1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(beauty1DetailPage),
  ],
  exports: [
    beauty1DetailPage
  ]
})

export class beauty1DetailPageModule { }
