import { createAction, props } from '@ngrx/store';
import { IPokemonPagination } from '@shared/models';

export const loadPokemonPaginations = createAction(
    '[PokemonPagination] Load PokemonPaginations'
);

export const loadPokemonPaginationsSuccess = createAction(
    '[PokemonPagination] Load PokemonPaginations Success',
    props<{ pokemonPagination: IPokemonPagination[] }>()
);
