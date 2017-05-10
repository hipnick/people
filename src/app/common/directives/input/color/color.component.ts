import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../directives/base/base.component';

@Component({
    selector: 'app-color',
    templateUrl: './color.component.html',
    styleUrls: ['./color.component.less']
})
export class ColorComponent extends BaseComponent {

    public toggle: boolean;

    ngOnInit() {
        super.ngOnInit();
        if (!this.model) {
            this.model = '#fff';
        }
    }

    //modelChange() {
    //    if (!this.model) {
    //        this.model = '#FFFFFF';
    //    }
    //}
}
