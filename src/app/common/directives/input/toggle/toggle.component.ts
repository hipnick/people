import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../directives/base/base.component';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.less']
})
export class ToggleComponent extends BaseComponent {

    onChange() {
        this.model = !this.model;
        super.onChange(this.model);
    }
}
