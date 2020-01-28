/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
    constructor(public translate: TranslateService) {
    }

    ngOnInit() {
    }
}
