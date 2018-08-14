import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';
import { CoreModule } from './core/core.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

@NgModule({
    declarations: [
        AppComponent,
        ProfilePageComponent,
    ],
    imports: [
        BrowserModule,
        CoreModule,
        AppMaterialModule,
        AngularFireAuthModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
