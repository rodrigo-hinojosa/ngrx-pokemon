import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from 'src/app/shared/shared.module';

import { layoutModuleReducers } from './state/reducers';
import { layoutModuleFeatureKey } from './state/selectors';

import { LayoutContainerComponent } from './components/layout-container/layout-container.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
    declarations: [
        LayoutContainerComponent,
        LoaderComponent,
        ErrorComponent
    ],
    imports: [
        SharedModule,
        StoreModule.forFeature(layoutModuleFeatureKey, layoutModuleReducers),
    ]
})
export class LayoutModule { }
