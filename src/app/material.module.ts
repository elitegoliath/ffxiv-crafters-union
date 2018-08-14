import { NgModule } from '@angular/core';
import {
    MdcAppBarModule,
    MdcButtonModule,
    MdcCardModule,
    MdcIconModule, MdcFabModule,
    MdcRippleModule, MdcDialogModule,
    MdcMenuModule,
    MdcTextFieldModule
} from '@angular-mdc/web';

@NgModule({
    exports: [
        MdcAppBarModule,
        MdcCardModule,
        MdcButtonModule,
        MdcIconModule,
        MdcFabModule,
        MdcRippleModule,
        MdcDialogModule,
        MdcMenuModule,
        MdcTextFieldModule,
    ],
})
export class AppMaterialModule { }
