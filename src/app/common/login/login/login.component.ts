import { Component, OnInit, Input } from '@angular/core';
import { AppDataStoreService } from '../../app-data-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
    @Input()
    public subs;
    @Input()
    public settings;

    public isCustomer;

    constructor(private dataStore: AppDataStoreService) {
        this.subs = 'login';

    }

    ngOnInit() {
        this.dataStore.set(this.subs, {});
    }

    login() {
        let login = this.dataStore.get<any>(this.subs);
        login.isCustomer = this.isCustomer;
        this.dataStore.trigger('login', 'login', login);
    }
}
