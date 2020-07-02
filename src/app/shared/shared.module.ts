import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PipesModule } from './pipes/pipes.module';
import { LoaderInterceptor } from './interceptors/loader/loader.interceptor';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        PipesModule
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        PipesModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true
        }
    ]
})
export class SharedModule { }
