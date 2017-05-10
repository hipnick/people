import $ from 'jquery/dist/jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdDialogModule, MdSnackBarModule, MaterialRootModule } from '@angular/material';


import 'hammerjs';
import * as moment from 'moment';

import { SubscriptionComponent } from './subscription/subscription.component';
import { AppDataStoreService } from './app-data-store.service';
import { LoginService } from './login/login.service';

import { ColorPickerModule } from './directives/input/color/src/lib/color-picker.module';

import { NavbarComponent } from './navigation/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { RadioComponent } from './directives/input/radio/radio.component';
import { BaseComponent } from './directives/base/base.component';
import { CollapseComponent } from './directives/display/collapse/collapse.component';
import { AppStructure, AppHost } from './app-structure';
import { HostComponent } from './host/host/host.component';
import { CheckboxComponent } from './directives/input/checkbox/checkbox.component';
import { ColorComponent } from './directives/input/color/color.component';
import { SelectComponent } from './directives/input/select/select.component';
import { TextComponent } from './directives/input/text/text.component';
import { TextAreaComponent } from './directives/input/text-area/text-area.component';
import { ToggleComponent } from './directives/input/toggle/toggle.component';
import { UploadComponent } from './directives/input/upload/upload.component';
import { ImageComponent } from './directives/display/image/image.component';
import { LabelComponent } from './directives/display/label/label.component';
import { LoginComponent } from './login/login/login.component';
import { AppointmentWeeklyComponent } from './directives/input/appointment-weekly/appointment-weekly.component';
import { ImageUploadComponent } from './directives/input/image-upload/image-upload.component';

@NgModule({
    declarations: [
        SubscriptionComponent,
        NavbarComponent,
        RadioComponent,
        BaseComponent,
        CollapseComponent,
        HostComponent,
        CheckboxComponent,
        ColorComponent,
        SelectComponent,
        TextComponent,
        TextAreaComponent,
        ToggleComponent,
        UploadComponent,
        ImageComponent,
        LabelComponent,
        LoginComponent,
        AppointmentWeeklyComponent,
        ImageUploadComponent,
    ],
    entryComponents: [
        SubscriptionComponent,
        NavbarComponent,
        RadioComponent,
        BaseComponent,
        CollapseComponent,
        HostComponent,
        CheckboxComponent,
        ColorComponent,
        SelectComponent,
        TextComponent,
        TextAreaComponent,
        ToggleComponent,
        UploadComponent,
        ImageComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        BrowserAnimationsModule,
        //NoopAnimationsModule,
        MaterialModule, MdDialogModule, MdSnackBarModule, MaterialRootModule,
        ColorPickerModule
    ],
    //providers: [AppDataStoreService, LoginService],
    bootstrap: [],
    exports: [
        //AppDataStoreService,
        //SubscriptionComponent,
        NavbarComponent,
        RadioComponent,
        BaseComponent,
        CollapseComponent,
        HostComponent,
        CheckboxComponent,
        ColorComponent,
        SelectComponent,
        TextComponent,
        TextAreaComponent,
        ToggleComponent,
        UploadComponent,
        ImageComponent,
        LabelComponent,
        LoginComponent,
        AppointmentWeeklyComponent,
        ImageUploadComponent,
        //LoginService,
    ]
})
export class CommonModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CommonModule,
            providers: [AppDataStoreService, LoginService]
        };
    }

    constructor() {
        moment.locale('de');
    }
}

export { NavbarComponent } from './navigation/navbar/navbar.component';
export { AppDataStoreService } from './app-data-store.service';
export { RadioComponent } from './directives/input/radio/radio.component';
export { SubscriptionComponent } from './subscription/subscription.component';
export { BaseComponent } from './directives/base/base.component';
export { CollapseComponent } from './directives/display/collapse/collapse.component';
export { AppStructure, AppHost } from './app-structure';
export { HostComponent } from './host/host/host.component';
export { CheckboxComponent } from './directives/input/checkbox/checkbox.component';
export { ColorComponent } from './directives/input/color/color.component';
export { SelectComponent } from './directives/input/select/select.component';
export { TextComponent } from './directives/input/text/text.component';
export { TextAreaComponent } from './directives/input/text-area/text-area.component';
export { ToggleComponent } from './directives/input/toggle/toggle.component';
export { UploadComponent } from './directives/input/upload/upload.component';
export { ImageComponent } from './directives/display/image/image.component';
export { ColorPickerModule } from './directives/input/color/src/lib/color-picker.module';
export { LabelComponent } from './directives/display/label/label.component';
export { LoginComponent } from './login/login/login.component';
export { AppointmentWeeklyComponent } from './directives/input/appointment-weekly/appointment-weekly.component';
export { LoginService } from './login/login.service';
export { ImageUploadComponent } from './directives/input/image-upload/image-upload.component';
