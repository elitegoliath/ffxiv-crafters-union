import { NgModule } from '@angular/core';
import {
    MdcAppBarModule,
    MdcButtonModule,
    MdcCardModule,
    MdcIconModule, MdcFabModule,
    MdcRippleModule, MdcDialogModule,
    MdcMenuModule
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
    ],
})
export class AppMaterialModule { }
