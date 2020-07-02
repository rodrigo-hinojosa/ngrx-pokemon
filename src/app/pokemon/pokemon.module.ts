import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '@shared/shared.module';
import { EffectsPokemonModule } from '@pokemon/state/effects';
import { pokemonModuleReducers } from '@pokemon/state/reducers';
import { pokemonModuleFeatureKey } from '@pokemon/state/selectors';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonContainerComponent } from './components/pokemon-container/pokemon-container.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

@NgModule({
    declarations: [
        PokemonContainerComponent,
        PokemonListComponent,
        PokemonDetailComponent
    ],
    imports: [
        SharedModule,
        PokemonRoutingModule,
        StoreModule.forFeature(pokemonModuleFeatureKey, pokemonModuleReducers),
        EffectsModule.forFeature(EffectsPokemonModule)
    ]
})
export class PokemonModule { }
