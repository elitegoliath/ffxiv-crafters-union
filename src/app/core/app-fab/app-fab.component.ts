import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-fab',
    templateUrl: './app-fab.component.html',
    styleUrls: ['./app-fab.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFabComponent {

    /**
     * Flag that marks the button as disabled, and prevents event emission.
     *
     * @memberof AppFabComponent
     */
    @Input()
    public isDisabled = false;

    /**
     * Emitter for the click event.
     *
     * @type {EventEmitter}
     * @memberof AppFabComponent
     */
    @Output()
    public clicked: EventEmitter<boolean> = new EventEmitter();

    /**
     * Emits the click event only if the button is not disabled.
     *
     * @returns
     * @memberof AppFabComponent
     */
    public onClick() {
        if (this.isDisabled) {
            return;
        }

        this.clicked.emit(true);
    }

}
