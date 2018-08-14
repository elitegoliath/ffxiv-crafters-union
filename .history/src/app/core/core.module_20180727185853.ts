import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppImageComponent } from './app-image/app-image.component';
import { AppButtonComponent } from './app-button/app-button.component';
import { AppMaterialModule } from '../material.module';
import { AppRippleComponent } from './app-ripple/app-ripple.component';
import { AppModalComponent } from './app-modal/app-modal.component';
import { AppDropdownMenuComponent } from './app-dropdown-menu/app-dropdown-menu.component';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
    ],
    declarations: [
        AppImageComponent,
        AppButtonComponent,
        AppRippleComponent,
        AppModalComponent,
        AppDropdownMenuComponent,
    ],
    exports: [
        AppImageComponent,
        AppButtonComponent,
        AppRippleComponent,
        AppModalComponent,
        AppDropdownMenuComponent,
    ],
})
export class CoreModule {
}
