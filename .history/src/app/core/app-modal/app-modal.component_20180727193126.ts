import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MdcDialogComponent } from '@angular-mdc/web';

@Component({
    selector: 'app-modal',
    templateUrl: './app-modal.component.html',
    styleUrls: ['./app-modal.component.scss']
})
export class AppModalComponent implements OnInit {

    
    @ViewChild('modal')
    private _modalRef: MdcDialogComponent;

    @Input()
    public isBlocking = false;

    constructor() { }

    ngOnInit() {
    }

    public show() {
        this._modalRef.show();
    }

}
