import { Component, OnInit, ViewChild } from '@angular/core';
import { MdcDialog } from '@angular-mdc/web';

@Component({
    selector: 'app-modal',
    templateUrl: './app-modal.component.html',
    styleUrls: ['./app-modal.component.scss']
})
export class AppModalComponent implements OnInit {

    @ViewChild('modal')
    private _modalRef: MdcDialog;

    constructor() { }

    ngOnInit() {
    }

    public show() {
        this._modalRef.open();
    }

}
