import { createReducer, on } from '@ngrx/store';
import { loadRootData, loadRootDataSuccess } from '../actions/root-data.actions';
import { IRootData } from '@shared/models';

export const rootDataFeatureKey: string = 'rootData';

export interface RootDataState extends IRootData { }

export const RootDataInitialState: RootDataState = {
    profile: null,
    sitePreferences: null
};

const rootDataInnerReducer = createReducer(RootDataInitialState,
    on(loadRootData, state => ({
        ...state
    })),
    on(loadRootDataSuccess, (state, { rootData }) => ({
        ...state,
        profile: rootData.profile,
        sitePreferences: rootData.sitePreferences
    }))
);

export function rootDataReducer(state, action) {
    return rootDataInnerReducer(state, action);
}
