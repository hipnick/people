import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
	private app:any = {
		name: 'People',
		description: 'People is a browser game inspired by Civilization, Imperialism, Paradox games and many others.'
	}

	@ViewChild('main') main:ElementRef;

    @HostListener('mousemove', ['$event'])
    onMousemove(event: MouseEvent) {
    	/*event.clientX 
        event.clientY */
       /* this.main.nativeElement.style.marginRight = (event.clientX / 100) + 'px';
        this.main.nativeElement.style.marginTop = (event.clientY / 100) + 'px';*/
    }
}
