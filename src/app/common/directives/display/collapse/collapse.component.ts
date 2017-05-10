import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { BaseComponent } from '../../../directives/base/base.component';
declare var $: any;

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.less']
})
export class CollapseComponent extends BaseComponent implements OnChanges {
    @ViewChild('collapse') collapse: ElementRef;

    public visibleInit;

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnChanges(simpleChanges: SimpleChanges) {
        //if (simpleChanges['visible'].currentValue != null) {
        if (simpleChanges['visible']) {
            if (simpleChanges['visible'].firstChange) {
                this.visibleInit = simpleChanges['visible'].currentValue;
            }
            this.showHide(simpleChanges['visible'].firstChange);
        }
    }

    showHide(firstChange) {
        if (this.collapse) {
            if (this.visible) {
                setTimeout(() => {
                    $(this.collapse.nativeElement).collapse(this.visible ? 'show' : 'hide');
                });
            }
            else {
                if (this.visible == false && this.cls && this.cls.indexOf('animated') && !firstChange) {
                    let classes = this.cls.split(' ');
                    let animatedIndex = classes.indexOf('animated');
                    let animation = classes[animatedIndex + 1];
                    $(this.collapse.nativeElement).removeClass(animation);
                    $(this.collapse.nativeElement).addClass(animation.replace('Down', 'Up').replace('Right', 'Left').replace('Up', 'Down').replace('Left', 'Right').replace('In', 'Out'));
                    setTimeout(() => {
                        $(this.collapse.nativeElement).collapse(this.visible ? 'show' : 'hide');
                    }, 1000);
                    return;
                }
                $(this.collapse.nativeElement).collapse(this.visible ? 'show' : 'hide');
            }
        }
    }
}
