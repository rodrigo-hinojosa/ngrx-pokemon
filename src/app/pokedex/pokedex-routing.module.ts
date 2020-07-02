import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexContainerComponent } from './components/pokedex-container/pokedex-container.component';

const routes: Routes = [
    {
        path: '',
        component: PokedexContainerComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokedexRoutingModule { }
