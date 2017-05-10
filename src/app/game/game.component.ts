import { Component, OnInit } from '@angular/core';
import { SubscriptionComponent } from '../common/common.module'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent extends SubscriptionComponent implements OnInit {
    ngOnInit() {
        this.subs = 'user';
        super.ngOnInit();
    }
}
