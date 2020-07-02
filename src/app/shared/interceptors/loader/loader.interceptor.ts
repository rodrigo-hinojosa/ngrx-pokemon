import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { LayoutModuleState } from '@core/layout/state/reducers';
import { showLoaders, hideLoaders, showErrors } from '@core/layout/state/actions';
import { finalize, delay, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    /**
     * Constructor
     * @param {Store<LayoutModuleState>} store
     */
    constructor(private store: Store<LayoutModuleState>) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        Promise.resolve(null).then(() => this.store.dispatch(showLoaders()));
        return next
            .handle(request)
            .pipe(
                delay(500),
                finalize(() => this.store.dispatch(hideLoaders())),
                catchError((response: HttpErrorResponse) => {
                    this.store.dispatch(showErrors());
                    return of(response.error);
                })
            );
    }
}
