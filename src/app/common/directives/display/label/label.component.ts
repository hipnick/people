import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../directives/base/base.component';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.less']
})
export class LabelComponent extends BaseComponent{
    modelChange() {
    }    
}
