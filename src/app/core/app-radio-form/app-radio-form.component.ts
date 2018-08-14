import { Component, Input } from '@angular/core';

export interface RadioOption {
    value: string;
    label: string;
}

@Component({
    selector: 'app-radio-form',
    templateUrl: './app-radio-form.component.html',
    styleUrls: ['./app-radio-form.component.scss']
})
export class AppRadioFormComponent {
    @Input()
    public options: RadioOption[];
}
