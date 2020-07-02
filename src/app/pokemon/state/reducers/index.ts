import { ActionReducerMap } from '@ngrx/store';
import { PokemonPaginationState, pokemonPaginationReducer } from './pokemon-pagination.reducer';
import { PokemonDetailState, pokemonDetailReducer } from './pokemon-detail.reducer';

export { PokemonPaginationState, pokemonPaginationInitialState, pokemonPaginationReducer } from './pokemon-pagination.reducer';
export { PokemonDetailState, pokemonDetailInitialState, pokemonDetailReducer } from './pokemon-detail.reducer';

export interface PokemonModuleState {
    pokemonPagination: PokemonPaginationState;
    pokemonDetail: PokemonDetailState;
}

export const pokemonModuleReducers: ActionReducerMap<PokemonModuleState> = {
    pokemonPagination: pokemonPaginationReducer,
    pokemonDetail: pokemonDetailReducer
}
