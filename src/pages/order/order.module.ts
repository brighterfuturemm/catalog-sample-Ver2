import { OrderPage } from './order';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
    OrderPage,
    ],
    imports: [
        IonicPageModule.forChild(OrderPage),
    ],
    exports: [
        OrderPage
    ]
})

export class OrderPageModule { };
