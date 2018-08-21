import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppImageComponent } from './app-image/app-image.component';
import { AppButtonComponent } from './app-button/app-button.component';
import { AppMaterialModule } from '../material.module';
import { AppRippleComponent } from './app-ripple/app-ripple.component';
import { AppModalComponent } from './app-modal/app-modal.component';
import { AppDropdownMenuComponent } from './app-dropdown-menu/app-dropdown-menu.component';
import { AppRadioFormComponent } from './app-radio-form/app-radio-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppFabComponent } from './app-fab/app-fab.component';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AppImageComponent,
        AppButtonComponent,
        AppRippleComponent,
        AppModalComponent,
        AppDropdownMenuComponent,
        AppRadioFormComponent,
        AppFabComponent,
    ],
    exports: [
        AppImageComponent,
        AppButtonComponent,
        AppRippleComponent,
        AppModalComponent,
        AppDropdownMenuComponent,
        AppRadioFormComponent,
        AppFabComponent,
    ],
})
export class CoreModule {
}
