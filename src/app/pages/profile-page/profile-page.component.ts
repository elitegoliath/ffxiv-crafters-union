import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ModalService } from '../../services';
import { UserState } from '../../services/middleware';
import { FormGroup } from '@angular/forms';
import { RadioOption } from '../../core/app-radio-form/app-radio-form.component';

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

    public characterSearchForm: FormGroup = new FormGroup({
        
    });

    constructor(
        private _modalService: ModalService,
        public userState: UserState,
    ) { }

    public closeModal(): void {
        this._modalService.closeModal();
    }

    public search() {
        console.log(this.characterSearchForm);
    }
}
