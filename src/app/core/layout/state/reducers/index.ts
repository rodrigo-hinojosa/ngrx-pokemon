import { ActionReducerMap } from '@ngrx/store';
import { LoaderState, loaderReducer } from './loader.reducer';
import { ErrorState, errorReducer } from './error.reducer';

export { LoaderState, loaderInitialState, loaderReducer } from './loader.reducer';
export { ErrorState, errorInitialState, errorReducer } from './error.reducer';

export interface LayoutModuleState {
    loader: LoaderState;
    status: ErrorState;
}

export const layoutModuleReducers: ActionReducerMap<LayoutModuleState> = {
    loader: loaderReducer,
    status: errorReducer
};
