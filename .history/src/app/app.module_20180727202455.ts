import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';
import { CoreModule } from './core/core.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        ProfilePageComponent,
    ],
    imports: [
        BrowserModule,
        CoreModule,
        AppMaterialModule,
        AngularFireModule.initializeApp(environment.firebase),
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
