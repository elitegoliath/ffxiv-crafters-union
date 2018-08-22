import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ModalService } from '../../services';
import { UserState } from '../../services/middleware';
import { RadioOption } from '../../core/app-radio-form/app-radio-form.component';
import { List } from 'immutable';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent {

    private readonly userNameRadio: RadioOption = {
        value: 'user_name',
        label: 'User name',
    };

    private readonly characterNameRadio: RadioOption = {
        value: 'character_name',
        label: 'Character Name',
    };

    public radioOptions: RadioOption[] = [
        this.userNameRadio,
        this.characterNameRadio,
    ];

    public lodestoneId = '';

    public characterName = '';

    public serverName = 'Select Server';

    public mockServerList: List<string> = List<string>([
        'Server 1',
        'Server 2',
        'Server 3',
        'Server 4',
        'Server 5',
        'Server 6',
        'Server 7',
        'Server 8',
        'Server 9',
        'Server 10',
        'Server 1',
        'Server 2',
        'Server 3',
        'Server 4',
        'Server 5',
        'Server 6',
        'Server 7',
        'Server 8',
        'Server 9',
        'Server 10',
        'Server 1',
        'Server 2',
        'Server 3',
        'Server 4',
        'Server 5',
        'Server 6',
        'Server 7',
        'Server 8',
        'Server 9',
        'Server 10',
    ]);

    public get isServerValid() {
        return this.mockServerList.includes(this.serverName);
    }

    constructor(
        private _modalService: ModalService,
        public userState: UserState,
    ) { }

    public closeModal(): void {
        this._modalService.closeModal();
    }

    public search() {

    }

    public setServerName(server: string) {
        this.serverName = server;
    }
}
