import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadRootData, loadRootDataSuccess } from '@core/root-data/state/actions';
import { WindowService } from '@core/services/window.service';
import { RootDataState } from '@core/root-data/state/reducers';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    /**
     * Constructor
     * @param {WindowService} windowService
     * @param {Store<RootDataState>} store
     */
    constructor(private windowService: WindowService,
                private store: Store<RootDataState>) { }

    ngOnInit(): void {
        this.store.dispatch(loadRootData());
        this.store.dispatch(loadRootDataSuccess(
            { rootData: this.windowService.nativeWindow.app }
        ));
    }
}
