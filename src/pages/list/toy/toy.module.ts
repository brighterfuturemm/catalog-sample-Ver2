import { ToyPage } from './toy';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
		ToyPage,
    ],
    imports: [
        IonicPageModule.forChild(ToyPage),
    ],
    exports: [
        ToyPage
    ]
})

export class ToyPageModule { };
