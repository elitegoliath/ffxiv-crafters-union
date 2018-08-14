import { NgModule } from '@angular/core';
import { MdcAppBarModule, MdcButtonModule, MdcCardModule, MdcIconModule, MdcFabModule, MdcRippleModule } from '@angular-mdc/web';

@NgModule({
    exports: [
        MdcAppBarModule,
        MdcCardModule,
        MdcButtonModule,
        MdcIconModule,
        MdcFabModule,
        MdcRippleModule,
    ],
})
export class AppMaterialModule { }
