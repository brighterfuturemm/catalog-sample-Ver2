import {AccessoriesPage } from './accessories';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
    AccessoriesPage,
    ],
    imports: [
        IonicPageModule.forChild(AccessoriesPage),
    ],
    exports: [
        AccessoriesPage
    ]
})

export class AccessoriesPageModule { };
