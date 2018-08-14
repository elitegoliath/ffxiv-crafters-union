import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ModalService } from '../../services';
import { UserState } from '../../services/middleware';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent {

    public characterSearchForm: FormGroup = new FormGroup({
        lodestone_id: new FormControl({value: '', disabled: false}),
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
