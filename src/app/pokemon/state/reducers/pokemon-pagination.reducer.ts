import { createReducer, on } from '@ngrx/store';
import { loadPokemonPaginations, loadPokemonPaginationsSuccess } from '@pokemon/state/actions';
import { IPokemonPagination } from '@shared/models';

export interface PokemonPaginationState {
    pages: IPokemonPagination[];
}

export const pokemonPaginationInitialState: PokemonPaginationState = {
    pages: []
};

const pokemonPaginationInnerReducer = createReducer(pokemonPaginationInitialState,
    on(loadPokemonPaginations, state => ({
        ...state
    })),
    on(loadPokemonPaginationsSuccess, (state, { pokemonPagination }) => ({
        ...state,
        pages: [...pokemonPagination]
    }))
);

export function pokemonPaginationReducer(state, action) {
    return pokemonPaginationInnerReducer(state, action);
}
