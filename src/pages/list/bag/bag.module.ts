import {BagPage } from './bag';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
    BagPage,
    ],
    imports: [
        IonicPageModule.forChild(BagPage),
    ],
    exports: [
        BagPage
    ]
})

export class BagPageModule { };
