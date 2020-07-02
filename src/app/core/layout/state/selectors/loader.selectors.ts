import { createSelector } from '@ngrx/store';
import { LayoutModuleState } from '@core/layout/state/reducers';
import { getLayoutModuleFeatureState } from '.';

export const selectLoader = createSelector(
    getLayoutModuleFeatureState, (state: LayoutModuleState) => state.loader.loading
);

export const selectLoaderModel = createSelector(
    selectLoader,
    (loading) => ({
        loading
    })
);
