import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { rootDataFeatureKey, rootDataReducer } from '@core/root-data/state/reducers';

@NgModule({
    imports: [
        StoreModule.forFeature(rootDataFeatureKey, rootDataReducer)
    ]
})
export class RootDataModule { }
