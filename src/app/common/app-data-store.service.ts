import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs'

@Injectable()
export class AppDataStoreService {
    
    constructor() {

    }

    private subscriptions: any = {};
    public set(name: string, value: any) {
        let sub = this.subscriptions[name];
        if (!sub) {
            sub = new BehaviorSubject(null);
            this.subscriptions[name] = sub;
        }
        
        sub.next(value);
    }

    public subscribe<T>(name, callback: ((value: T) => any)) {
        return this.getSubscription(name).subscribe(callback);
    }

    public get<T>(name): T {
        return this.getSubscription(name).getValue();
    }

    public trigger(model, type, payload) {
        this.set(model + '.' + type, payload);
    }

    public handle(model, type, callback: ((value: any) => any)) {
        return this.subscribe(model + '.' + type, callback);
    }

    private getSubscription(name): BehaviorSubject<any> {
        if (!name) {
            throw new Error('name can not be null');
        }
        let sub = this.subscriptions[name];
        if (!sub) {
            sub = new BehaviorSubject(null);
            this.subscriptions[name] = sub;
        }
        return sub;
    }

    public getObservable(name): BehaviorSubject<any> {
        return this.getSubscription(name);
    }
}
