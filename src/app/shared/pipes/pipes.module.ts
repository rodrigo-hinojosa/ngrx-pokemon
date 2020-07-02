import { NgModule } from '@angular/core';
import { PokemonWeightPipe } from './pokemon-weight/pokemon-weight.pipe';
import { PokemonHeightPipe } from './pokemon-height/pokemon-height.pipe';

@NgModule({
    declarations: [
        PokemonWeightPipe,
        PokemonHeightPipe
    ],
    exports: [
        PokemonWeightPipe,
        PokemonHeightPipe
    ]
})
export class PipesModule { }
