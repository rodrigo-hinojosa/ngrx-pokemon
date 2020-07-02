import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonService } from '@core/services/pokemon';
import { loadPokemonPaginations, loadPokemonPaginationsSuccess } from '@pokemon/state/actions';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class PokemonPaginationEffects {

    getPokemonPaginationInit$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadPokemonPaginations),
            mergeMap(
                () => this.pokemonService.getPokemonPaginationInit()
                    .pipe(
                        map(pokemonPagination => {
                            pokemonPagination.active = true;
                            return loadPokemonPaginationsSuccess(
                                {
                                    pokemonPagination: [pokemonPagination]
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
