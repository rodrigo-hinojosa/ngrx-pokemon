import { createSelector } from '@ngrx/store';
import { LayoutModuleState } from '@core/layout/state/reducers';
import { getLayoutModuleFeatureState } from '.';

export const selectError = createSelector(
    getLayoutModuleFeatureState, (state: LayoutModuleState) => state.status.error
);

export const selectErrorModel = createSelector(
    selectError,
    (error) => ({
        error
    })
);
