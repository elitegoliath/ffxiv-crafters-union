import { NgModule } from '@angular/core';
import { MdcAppBarModule, MdcButtonModule, MdcCardModule, MdcIconModule } from '@angular-mdc/web';

@NgModule({
    exports: [
        MdcAppBarModule,
        MdcCardModule,
        MdcButtonModule,
        MdcIconModule,
    ],
})
export class AppMaterialModule { }
