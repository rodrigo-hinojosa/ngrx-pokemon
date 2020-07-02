import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RootDataState, rootDataFeatureKey } from '@core/root-data/state/reducers';

const getRootDataState = createFeatureSelector<RootDataState>(
    rootDataFeatureKey
);

export const selectProfile = createSelector(
    getRootDataState,
    state => state.profile
);

export const selectSitePreferences = createSelector(
    getRootDataState,
    state => state.sitePreferences
);
