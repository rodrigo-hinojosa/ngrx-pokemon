import { createReducer, on } from '@ngrx/store';
import { showErrors, hideErrors } from '@core/layout/state/actions';

export interface ErrorState {
    error: boolean;
}

export const errorInitialState: ErrorState = {
    error: false
};

const errorInnerReducer = createReducer(errorInitialState,
    on(showErrors, state => ({
        ...state,
        error: true
    })),
    on(hideErrors, state => ({
        ...state,
        error: false
    }))
);

export function errorReducer(state, action) {
    return errorInnerReducer(state, action);
}
