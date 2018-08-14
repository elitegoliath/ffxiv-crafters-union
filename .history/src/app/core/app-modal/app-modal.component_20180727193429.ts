import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MdcDialogComponent } from '@angular-mdc/web';

@Component({
    selector: 'app-modal',
    templateUrl: './app-modal.component.html',
    styleUrls: ['./app-modal.component.scss']
})
export class AppModalComponent implements OnInit {

    /**
     * Reference to the modal in the template.
     *
     * @private
     * @type {MdcDialogComponent}
     * @memberof AppModalComponent
     */
    @ViewChild('modal')
    private _modalRef: MdcDialogComponent;

    /**
     * Whether clicking outside the modal or hitting the escape key is blocked from
     * executing.
     *
     * @memberof AppModalComponent
     */
    @Input()
    public isBlocking = false;

    constructor() { }

    ngOnInit() {
    }

    /**
     * Show the modal.
     *
     * @memberof AppModalComponent
     */
    public show() {
        this._modalRef.show();
    }

}
