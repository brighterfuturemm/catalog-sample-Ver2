import {ElectronicPage } from './electronic';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
    ElectronicPage,
    ],
    imports: [
        IonicPageModule.forChild(ElectronicPage),
    ],
    exports: [
        ElectronicPage
    ]
})

export class ElectronicPageModule { };
