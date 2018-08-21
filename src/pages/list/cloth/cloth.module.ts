import {ClothPage } from './cloth';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
    ClothPage,
    ],
    imports: [
        IonicPageModule.forChild(ClothPage),
    ],
    exports: [
        ClothPage
    ]
})

export class ClothPageModule { };
