import { createReducer, on } from '@ngrx/store';
import { showLoaders, hideLoaders } from '@core/layout/state/actions';

export interface LoaderState {
    loading: boolean;
}

export const loaderInitialState: LoaderState = {
    loading: false
};

const loaderInnerReducer = createReducer(loaderInitialState,
    on(showLoaders, state => ({
        ...state,
        loading: true
    })),
    on(hideLoaders, state => ({
        ...state,
        loading: false
    }))
);

export function loaderReducer(state, action) {
    return loaderInnerReducer(state, action);
}
