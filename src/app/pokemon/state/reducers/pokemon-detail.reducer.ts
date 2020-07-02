import { createReducer, on } from '@ngrx/store';
import { loadPokemonDetails, loadPokemonDetailsSuccess } from '@pokemon/state/actions';
import { IPokemon } from '@shared/models';

export interface PokemonDetailState {
    pokemon: IPokemon;
}

export const pokemonDetailInitialState: PokemonDetailState = {
    pokemon: null
};

const pokemonDetailInnerReducer = createReducer(pokemonDetailInitialState,
    on(loadPokemonDetails, state => ({
        ...state,
    })),
    on(loadPokemonDetailsSuccess, (state, { pokemon }) => ({
        ...state,
        pokemon
    }))
);

export function pokemonDetailReducer(state, action) {
    return pokemonDetailInnerReducer(state, action);
}
