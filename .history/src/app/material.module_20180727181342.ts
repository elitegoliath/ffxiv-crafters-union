import { NgModule } from '@angular/core';
import { MdcAppBarModule, MdcButtonModule, MdcCardModule, MdcIconModule, MdcFabModule } from '@angular-mdc/web';

@NgModule({
    exports: [
        MdcAppBarModule,
        MdcCardModule,
        MdcButtonModule,
        MdcIconModule,
        MdcFabModule,
    ],
})
export class AppMaterialModule { }
