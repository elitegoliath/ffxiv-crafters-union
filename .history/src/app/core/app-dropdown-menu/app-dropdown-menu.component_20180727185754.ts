import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-dropdown-menu',
    templateUrl: './app-dropdown-menu.component.html',
    styleUrls: ['./app-dropdown-menu.component.scss']
})
export class AppDropdownMenuComponent implements OnInit {

    @ViewChild('menu')
    private _menuRef: ElementRef;

    constructor() { }

    ngOnInit() {
    }

    public open() {
        this._
    }

}
