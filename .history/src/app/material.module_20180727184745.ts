import { NgModule } from '@angular/core';
import { MdcAppBarModule, MdcButtonModule, MdcCardModule, MdcIconModule, MdcFabModule, MdcRippleModule, MdcDialogModule } from '@angular-mdc/web';

@NgModule({
    exports: [
        MdcAppBarModule,
        MdcCardModule,
        MdcButtonModule,
        MdcIconModule,
        MdcFabModule,
        MdcRippleModule,
        MdcDialogModule,
        MdcMen
    ],
})
export class AppMaterialModule { }
