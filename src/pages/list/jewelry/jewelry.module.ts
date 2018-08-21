import {JewelryPage } from './jewelry';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
    JewelryPage,
    ],
    imports: [
        IonicPageModule.forChild(JewelryPage),
    ],
    exports: [
        JewelryPage
    ]
})

export class JewelryPageModule { };
