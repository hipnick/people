import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../directives/base/base.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent extends BaseComponent {
    modelChange() {
    }
}
