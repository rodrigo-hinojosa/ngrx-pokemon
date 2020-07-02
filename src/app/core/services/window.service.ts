import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WindowService {
    get nativeWindow(): any {
        return window;
    }
}
