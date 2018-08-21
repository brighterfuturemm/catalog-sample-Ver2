import { WatchPage } from './watch';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
		WatchPage,
    ],
    imports: [
        IonicPageModule.forChild(WatchPage),
    ],
    exports: [
        WatchPage
    ]
})

export class WatchPageModule { };
