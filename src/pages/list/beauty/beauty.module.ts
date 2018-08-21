import {BeautyPage } from './beauty';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
    BeautyPage,
    ],
    imports: [
        IonicPageModule.forChild(BeautyPage),
    ],
    exports: [
        BeautyPage
    ]
})

export class BeautyPageModule { };
