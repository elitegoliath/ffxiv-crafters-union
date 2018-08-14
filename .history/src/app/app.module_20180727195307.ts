import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
        Angular
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
