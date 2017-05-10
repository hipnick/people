import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../../directives/base/base.component';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.less']
})
export class TextComponent extends BaseComponent {
    modelChange() {
        if (!this.model) {
            this.model = '';
        }
    }

    //ngOnInit() {
    //    this.dataStore.handle(this.subs, 'validate', payload => {
    //        if (payload) {
    //            this.validate();
    //            payload[this.subs] = this.error;
    //        }
    //    });
    //    super.ngOnInit();
    //}


    //onChange(value) {        
    //    super.onChange(value);
    //    this.validate();
    //}

    @Input()
    public type: string;
    @Input()
    public icon: string;
    @Input()
    public required: boolean;

    @Output()
    public enter = new EventEmitter();

}
