import { createAction, props } from '@ngrx/store';
import { IPokemon } from '@shared/models';

export const loadPokemonDetails = createAction(
    '[PokemonDetail] Load PokemonDetails',
    props<{ name: string }>()
);

export const loadPokemonDetailsSuccess = createAction(
    '[PokemonDetail] Load PokemonDetails Success',
    props<{ pokemon: IPokemon }>()
);
