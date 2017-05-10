import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges, Input } from '@angular/core';
import { BaseComponent } from '../../../directives/base/base.component';
declare var $: any;

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.less']
})
export class ImageComponent extends BaseComponent {

    @ViewChild('img') img: ElementRef;

    @Input()
    public zoom: boolean = true;

    modelChange() {
        if (this.model) {
            this.model = this.sanitizer.bypassSecurityTrustUrl(this.model);
            if (this.zoom == true) {
                if (this.img) {
                    $(this.img.nativeElement).materialbox();
                }
            }
        }
    }

}
