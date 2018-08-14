import { Component, ViewChild, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { MdcDialogComponent } from '@angular-mdc/web';
import { v4 as uuid } from 'uuid';
import { ModalService } from '../../services';

@Component({
    selector: 'app-modal',
    templateUrl: './app-modal.component.html',
    styleUrls: ['./app-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppModalComponent implements OnInit, OnDestroy {

    @Input()
    public modalId = new uuid();

    /**
     * Whether clicking outside the modal or hitting the escape key is blocked from
     * executing.
     *
     * @memberof AppModalComponent
     */
    @Input()
    public isEscapable = true;

    /**
     * Dictates whether a backdrop will be present.
     *
     * @memberof AppModalComponent
     */
    @Input()
    public hasBackdrop = true;

    /**
     * Reference to the modal in the template.
     *
     * @private
     * @type {MdcDialogComponent}
     * @memberof AppModalComponent
     */
    @ViewChild('modal')
    public modalRef: MdcDialogComponent;

    /**
     * Creates an instance of AppModalComponent.
     *
     * @param {ChangeDetectorRef} _cdr
     * @memberof AppModalComponent
     */
    constructor(
        private _cdr: ChangeDetectorRef,
        private _modalService: ModalService,
    ) {}

    ngOnInit() {
        this._modalService.registerModal(this);
    }

    ngOnDestroy() {
        this._modalService.unregisterModal(this.modalId);
    }

    /**
     * Show the modal.
     *
     * @memberof AppModalComponent
     */
    public show() {
        this._modalService.openModal(this.modalId);
        this._cdr.markForCheck();
    }
}
