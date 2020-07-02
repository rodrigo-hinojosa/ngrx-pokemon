import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutContainerComponent } from '@core/layout/components/layout-container/layout-container.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutContainerComponent,
        children: [
            {
                path: '',
                redirectTo: 'pokemon',
                pathMatch: 'full',
            },
            {
                path: 'pokemon',
                loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
            },
            {
                path: 'pokedex',
                loadChildren: () => import('./pokedex/pokedex.module').then(m => m.PokedexModule)
            },
            {
                path: 'perfil',
                loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
