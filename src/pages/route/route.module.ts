import { RoutePage } from './route';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
    RoutePage,
    ],
    imports: [
        IonicPageModule.forChild(RoutePage),
    ],
    exports: [
        RoutePage
    ]
})

export class RoutePageModule { };
