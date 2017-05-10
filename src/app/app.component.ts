import { Component, HostListener, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router'
//declare var require: any;
//const Parallax = require('parallax-js');
declare var Parallax: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    constructor(private router: Router) { }

    private app: any = {
        name: 'People',
        description: 'People is a browser game inspired by Civilization, Imperialism, Paradox games and many other strategy games.'
    };

    private counter = 0;
    private speed = 20;

    private sequence = ['create'];
    private current = 'start';

    private cities = [];

    ngOnInit() {
        var scene = document.getElementById('scene');

        var parallax = new Parallax(scene);
        setInterval(() => {
            this.tick();
        }, this.speed);
    }

    tick() {

        if (this.counter % this.speed == 0) {
            var angle = Math.random() * Math.PI * 2;
            var radius = (Math.random() - 0.5) * 50;
            this.cities.push({ x: 50 + Math.cos(angle) * radius + 'vw', y: 50 + Math.sin(angle) * radius + 'vh' });
        }
        this.counter++;
    }

    start() {
        this.current = 'animating';
        if (this.sequence.length == 0) {
            var scene = document.getElementById('scene');
            scene.style.transform = 'scale(2)';
            scene.style.transitionDuration = '5000ms';
            scene.style.transitionDelay = '500ms';
            setTimeout(() => {
                this.router.navigate(['game']);
            }, 5000)
        }
        else {
            setTimeout(() => {
                this.current = this.sequence.pop();
            }, 1000);
        }

        

    }
}
