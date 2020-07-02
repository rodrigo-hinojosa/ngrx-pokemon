import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonContainerComponent } from './components/pokemon-container/pokemon-container.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
    {
        path: '',
        component: PokemonContainerComponent,
        children: [
            {
                path: '',
                component: PokemonListComponent
            },
            {
                path: ':name',
                component: PokemonDetailComponent
            }
        ]
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
export class PokemonRoutingModule { }

