import {
    MdcAppBarModule,
    MdcButtonModule,
    MdcCardModule,
    MdcDialogModule,
    MdcFabModule,
    MdcIconModule,
    MdcMenuModule,
    MdcRippleModule,
    MdcTextFieldModule,
    MdcElevationModule,
    MdcRadioModule,
    MdcFormFieldModule
} from '@angular-mdc/web';
import { NgModule } from '@angular/core';

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
        MdcElevationModule,
        MdcRadioModule,
        MdcFormFieldModule,
    ],
})
export class AppMaterialModule { }
