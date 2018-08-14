import { NgModule } from '@angular/core';
import { MdcAppBarModule, MdcButtonModule, MdcCardModule, MdcIconModule, MdcFab } from '@angular-mdc/web';

@NgModule({
    exports: [
        MdcAppBarModule,
        MdcCardModule,
        MdcButtonModule,
        MdcIconModule,
        MdcFab,
    ],
})
export class AppMaterialModule { }
