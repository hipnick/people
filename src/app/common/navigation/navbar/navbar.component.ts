import { Component, OnInit } from '@angular/core';
import { SubscriptionComponent } from '../../subscription/subscription.component';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less']
})
export class NavbarComponent extends SubscriptionComponent {
    public logo: any;
    modelChange() {

        this.subscribe('logo', logo => {
            this.logo = logo;
        });
    }

    navigate(href) {
        this.model.forEach(menu => {
            menu.selected = (menu.href == href);
        });
        this.dataStore.trigger('navigation', 'goto', href);
    }

    //menuItems: Array<Object> = [{
    //    hideadmin: false,
    //    label: 'Design',
    //    name: 'Design',
    //    active: false,
    //    ngdisabled: false,
    //    id: '1',
    //    placeholder: 'design',
    //    position: 1,
    //    href:'design'
    //}];

}
