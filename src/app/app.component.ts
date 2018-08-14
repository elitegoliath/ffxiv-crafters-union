import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserState } from './services/middleware/user-state.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    public isLoggedIn = false;

    constructor(
        public authService: AuthService,
        public userState: UserState,
    ) {
    }
}
