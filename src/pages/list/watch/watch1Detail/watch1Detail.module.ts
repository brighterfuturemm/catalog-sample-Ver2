import { watch1DetailPage } from './watch1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
	watch1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(watch1DetailPage),
  ],
  exports: [
	watch1DetailPage
  ]
})

export class watch1DetailPageModule { }
