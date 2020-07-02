import { createFeatureSelector } from '@ngrx/store';
import { LayoutModuleState } from '@core/layout/state/reducers';

export const layoutModuleFeatureKey = 'layoutModule';
export const getLayoutModuleFeatureState = createFeatureSelector<LayoutModuleState>(layoutModuleFeatureKey);
