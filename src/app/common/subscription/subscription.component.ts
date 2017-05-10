import { Component, OnInit, OnDestroy, Input, SimpleChanges, OnChanges, ComponentFactoryResolver, NgZone, ApplicationRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppDataStoreService } from '../app-data-store.service';

@Component({
    selector: 'app-subscription',
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.less']
})
export class SubscriptionComponent implements OnInit, OnDestroy {

    @Input()
    public subs: string;

    @Input()
    public prop: string;

    @Input()
    public key: string;

    @Input()
    public model: any;

    @Input()
    public label: string;

    getModel() {
        return this.model;
    }

    private subscriptions = [];

    modelChange() {

    }

    public subscribe<T>(subs, callback: ((value) => any)) {
        this.subscriptions.push(this.dataStore.subscribe<T>(subs, callback));
    }

    public handle(model, type, callback: ((value: any) => any)) {
        this.subscriptions.push(this.dataStore.handle(model, type, callback));
    }

    constructor(public dataStore: AppDataStoreService, protected resolver: ComponentFactoryResolver, private zone: NgZone, protected appRef: ApplicationRef, public sanitizer: DomSanitizer ) {

    }

    ngOnInit() {
        try {
            if (this.subs) {
                if (this.prop) {
                    this.subscribe(this.subs, data => {
                        if (data && this.model != data[this.prop] && data.hasOwnProperty(this.prop)) {
                            this.model = data[this.prop];
                        }
                        this.modelChange();
                    });
                }
                else {
                    this.subscribe(this.subs, data => {
                        if (data) {
                            this.model = data;
                            this.modelChange();
                        }
                    });
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    ngOnDestroy() {
        if (this.subscriptions) {
            //console.log(this.constructor.name + ' destroyed - subs-count:' + this.subscriptions.length);
            this.subscriptions.forEach(q => {
                q.unsubscribe();
            });            
        }
    }

}