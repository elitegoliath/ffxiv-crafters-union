import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppImageComponent } from './app-image/app-image.component';
import { AppButtonComponent } from './app-button/app-button.component';
import { AppMaterialModule } from '../material.module';
import { AppRippleComponent } from './app-ripple/app-ripple.component';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
    ],
    declarations: [
        AppImageComponent,
        AppButtonComponent,
        AppRippleComponent,
    ],
    exports: [
        AppImageComponent,
        AppButtonComponent,
    ],
})
export class CoreModule {
}
