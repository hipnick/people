import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../directives/base/base.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less']
})
export class CheckboxComponent extends BaseComponent{
    onChange() {
        this.model = !this.model;
        super.onChange(this.model);
    }


}
