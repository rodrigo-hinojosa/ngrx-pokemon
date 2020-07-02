import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonService } from '@core/services/pokemon';
import { loadPokemonDetails, loadPokemonDetailsSuccess } from '@pokemon/state/actions';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class PokemonDetailEffects {

    getPokemonByName$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadPokemonDetails),
            mergeMap(
                (action) => this.pokemonService.getPokemonByName(action.name)
                    .pipe(
                        map(pokemon => {
                            const { id, name, height, weight, abilities, types, sprites } = pokemon;
                            return loadPokemonDetailsSuccess(
                                {
                                    pokemon: { id, name, height, weight, abilities, types, sprites }
                                }
                            );
                        })
                    )
            )
        )
    );

    /**
     * Constructor
     * @param {Actions} actions$
     * @param {PokemonService} pokemonService
     */
    constructor(private actions$: Actions,
        private pokemonService: PokemonService) { }
}
