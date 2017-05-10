import { Injectable, ApplicationRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Jsonp, Response, Http } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { AppDataStoreService } from '../app-data-store.service';
//import { environment } from 'environments/environment';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class LoginService {

    private dialogRef: MdDialogRef<LoginComponent>;

    constructor(private dialog: MdDialog, private dataStore: AppDataStoreService, private jsonp: Jsonp, private appRef: ApplicationRef) {
        this.dataStore.handle('login', 'close', payload => {
            if (payload) {
                if (this.dialogRef) {
                    this.dialogRef.close();
                }
            }
        });
        this.dataStore.handle('login', 'login', payload => {
            if (payload) {
                this.login(payload.user, payload.pass, payload.isCustomer ? 'F' : 'W', payload.isCustomer)
            }
        });
        this.dataStore.handle('login', 'logout', payload => {
            if (payload) {
                this.logout();
            }
        });
    }

    open(isCustomer) {
        this.dialogRef = this.dialog.open(LoginComponent, { disableClose: !isCustomer });
        this.dialogRef.componentInstance.isCustomer = isCustomer;
    }


    login(user, pass, type, istKundenApp) {
        let environment = this.dataStore.get<any>('environment');
        var hash = this.encode(user, pass, istKundenApp);
        let studio = this.dataStore.get('studio');
        return this.jsonp.get(environment.url + 'Authentifizierung' + type + '/' + studio + '/' + hash + '?callback=JSONP_CALLBACK').toPromise()
            .then((response) => {
                let body = response['_body'];
                if (body.AuthentifizierungsStatus === 1) {
                    this.dataStore.set('user', {
                        name: body.Vorname + ' ' + body.Nachname,
                        hash: hash,
                        type: type
                    });
                    this.dataStore.trigger('login', 'close', body);
                    this.dataStore.trigger('login', 'success', body);
                    this.appRef.tick();
                }
                else {
                    let fehler;
                    switch (body.AuthentifizierungsStatus) {
                        case -1:
                            fehler = "Firmenkennung nicht vorhanden";
                            break;
                        case -2:
                            fehler = "Lokaler Server nicht erreichbar";
                            break;
                        case -3:
                            fehler = "Person mit dem Benutzernamen '" + user + "' nicht vorhanden";
                            break;
                        case -4:
                            fehler = "Person '" + body.Vorname + " " + body.Nachname + "' nicht aktiviert";
                            break;
                        case -5:
                            fehler = "Passwort von '" + body.Vorname + " " + body.Nachname + "' falsch";
                            break;
                        case -6:
                            fehler = "Person '" + body.Vorname + " " + body.Nachname + "' ist nicht berechtigt";
                            break;
                        case -7:
                            fehler = "Benutzername oder/und Passwort falsch!";
                            break;
                        default:
                            fehler = "Allgemeiner Fehler";
                            break;
                    }
                    this.dataStore.trigger('message', 'show', { message: fehler });
                }
            }).catch(error => {
            });
    }

    logout() {
        this.dataStore.set('user', null);
    }

    encode(benutzername, passwort, istKundenApp) {
        //var istKundenApp = false;
        return btoa([benutzername, Md5.hashStr(passwort), (istKundenApp ? 'k' : 'm')].join(":"));
    }
}
