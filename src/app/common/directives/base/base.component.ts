import { Component, OnInit, Input, ViewChild, ElementRef, Output } from '@angular/core';
import { SubscriptionComponent } from '../../subscription/subscription.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.less']
})
export class BaseComponent extends SubscriptionComponent implements OnInit {

    @Input()
    public visible: boolean = true;

    @Input()
    public items: ListItem[];

    @Input()
    public required: boolean;

    public error: string;
    
    @Input()
    public cls: string;

    @Input()
    public errorLabel;
    
    selected() {
        if (this.items && this.model) {
            return this.items.find(f => f.value == this.model);
        }
    }

    validate() {
        this.error = null;
        if (this.required) {
            if (!this.model) {
                this.error = this.errorLabel || (this.label + ' ist Pflichtfeld');
            }
        }
    }

    ngOnInit() {

        this.dataStore.handle(this.subs, 'validate', payload => {
            if (payload) {
                this.validate();
                if (this.error) {
                    payload[this.prop] = this.error;
                }
                else {
                    delete payload[this.prop];
                }
            }
        });

        super.ngOnInit();
    }
    

    onChange(value) {
        try {
            if (this.subs) {
                let obj = this.dataStore.get<any>(this.subs);
                if (!obj) {
                    obj = {};
                }
                if (this.prop) {
                    if (value != obj[this.prop]) {
                        obj[this.prop] = value;
                        this.dataStore.set(this.subs, obj);
                        let payload = {};
                        payload[this.prop] = value;
                        this.dataStore.trigger(this.subs, 'change', payload);
                        this.validate();
                    }
                }
            }
        }
        catch (e) {
            console.log(e);
        }

    }
}

export class ListItem {
    public value: any;
    public name: any;
    public style: any;
}
