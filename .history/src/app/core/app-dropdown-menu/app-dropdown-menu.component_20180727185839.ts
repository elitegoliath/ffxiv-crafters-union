import { Component, OnInit, ViewChild } from '@angular/core';
import { MdcMenu } from '../../../../node_modules/@angular-mdc/web';

@Component({
    selector: 'app-dropdown-menu',
    templateUrl: './app-dropdown-menu.component.html',
    styleUrls: ['./app-dropdown-menu.component.scss']
})
export class AppDropdownMenuComponent implements OnInit {

    @ViewChild('menu')
    private _menuRef: MdcMenu;

    constructor() { }

    ngOnInit() {
    }

    public open() {
        this._menuRef.open();
    }
}
