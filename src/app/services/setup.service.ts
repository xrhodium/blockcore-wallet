import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class SetupService {
    constructor() {

    }

    /** The name of the app. */
    get name(): string {
        return 'Blockcore Hub';
        // return 'City Hub';
    }

    /** Returns the name of the logo or path to the logo to be displayed in case an image is used. */
    get logo(): string {
        return 'Blockcore Hub';
        // return 'assets/city-hub/city-hub-dark.png';
    }

}
