import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../../../directives/base/base.component';
declare var $: any;

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.less']
})
export class RadioComponent extends BaseComponent {
    
    onChange(value) {
        //if (this.items) {
        //    let text = value.currentTarget.innerText.trim()
        //    let itemValue = this.items.find(a => {
        //        return a.name == text;
        //    }).value;

        //    super.onChange(itemValue);
        //}
        if (this.items) {
            super.onChange(this.items[$(value.currentTarget).index() - 1].value);
        }
    }
    @Input()
    public required: boolean;
}
