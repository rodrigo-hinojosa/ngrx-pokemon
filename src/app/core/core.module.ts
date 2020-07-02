import { NgModule, Optional, SkipSelf } from '@angular/core';
import { LayoutModule } from '@core/layout/layout.module';
import { RootDataModule } from '@core/root-data/root-data-module.module';

@NgModule({
    imports: [
        LayoutModule,
        RootDataModule
    ],
    exports: [
        LayoutModule,
        RootDataModule
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule has already been loaded');
        }
    }
}
