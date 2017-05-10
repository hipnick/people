import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../../../directives/base/base.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent extends BaseComponent {
    @Input()
    public icon;

    onChange(value) {
        var reader = new FileReader();

        reader.onload = (loadEvent) => {
            super.onChange(loadEvent.target['result']);
        }
        reader.readAsDataURL(value[0]);
    }

    clear() {
        super.onChange(null);
    }
}
