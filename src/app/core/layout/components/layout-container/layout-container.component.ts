import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoaderState, ErrorState } from '@core/layout/state/reducers';
import { selectLoaderModel } from '@core/layout/state/selectors/loader.selectors';
import { selectErrorModel } from '@core/layout/state/selectors/error.selectors';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-layout-container',
    templateUrl: './layout-container.component.html',
    styleUrls: ['./layout-container.component.scss'],
})
export class LayoutContainerComponent implements OnInit {

    // -----------------------------------------------------------------------------------------------------
    // @ Public variables
    // -----------------------------------------------------------------------------------------------------
    loaderState$: Observable<LoaderState>;
    errorState$: Observable<ErrorState>;

    /**
     * Constructor
     * @param {Store} store
     */
    constructor(private store: Store) { }

    ngOnInit(): void {
        this.loaderState$ = this.store.select(selectLoaderModel);
        this.errorState$ = this.store.select(selectErrorModel);
    }
}
