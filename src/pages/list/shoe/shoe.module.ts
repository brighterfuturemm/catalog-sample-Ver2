import { ShoePage } from './shoe';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
		ShoePage,
    ],
    imports: [
        IonicPageModule.forChild(ShoePage),
    ],
    exports: [
        ShoePage
    ]
})

export class ShoePageModule { };
