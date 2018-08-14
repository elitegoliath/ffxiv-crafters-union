import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { StoreModule } from '@ngrx/store';
import { AppMaterialModule } from './material.module';
import { CoreModule } from './core/core.module';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AuthUserReducer, LogginStatusReducer } from './store/reducers';

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
        StoreModule.forRoot({
            AuthUser: AuthUserReducer,
            LogginStatus: LogginStatusReducer,
        }),
        FormsModule,
        ReactiveFormsModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
