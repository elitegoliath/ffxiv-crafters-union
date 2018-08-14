import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './app-button.component.html',
    styleUrls: ['./app-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppButtonComponent {

    /**
     * Whether the button is a FAB style or regular.
     *
     * @memberof AppButtonComponent
     */
    @Input()
    public isFab = false;

    /**
     * Flag that marks the button as disabled, and prevents event emission.
     *
     * @memberof AppButtonComponent
     */
    @Input()
    public isDisabled = false;

    /**
     * Emitter for the click event.
     *
     * @type {EventEmitter}
     * @memberof AppButtonComponent
     */
    @Output()
    public clicked: EventEmitter<boolean> = new EventEmitter();

    /**
     * Emits the click event only if the button is not disabled.
     *
     * @returns
     * @memberof AppButtonComponent
     */
    public onClick() {
        if (this.isDisabled) {
            return;
        }

        this.clicked.emit(true);
    }
}
