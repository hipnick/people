import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RootHostComponent } from './root-host.component';

import { CommonModule } from './common/common.module';
import { GameComponent } from './game/game.component'



const appRoutes: Routes = [
    { path: '', component: AppComponent, pathMatch: 'full' },
    { path: 'game', component: GameComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    declarations: [
        RootHostComponent,
        AppComponent,
        GameComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        CommonModule.forRoot()
    ],
    providers: [],
    bootstrap: [RootHostComponent]
})
export class AppModule {
}
