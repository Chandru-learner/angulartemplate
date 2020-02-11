import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeTamil from '@angular/common/locales/ta';
import localeTelugu from '@angular/common/locales/te';

@Injectable({ providedIn: 'root' })
export class SessionService {

    private _locale: string;

    set locale(value: string) {
        this._locale = value;
    }
    get locale(): string {
        return this._locale || 'en-US';
    }

    registerCulture(culture: string) {
        if (!culture) {
            return;
        }
        this.locale = culture;

        // Register locale data since only the en-US locale data comes with Angular
        switch (culture) {
            case 'ta-TAM': {
                registerLocaleData(localeTamil);
                break;
            }
            case 'te-TEL': {
                registerLocaleData(localeTelugu);
                break;
            }
        }
    }
}