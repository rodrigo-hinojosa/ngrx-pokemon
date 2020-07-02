import { createSelector } from '@ngrx/store';
import { PokemonModuleState } from '@pokemon/state/reducers';
import { getPokemonModuleFeatureState } from '.';

export const selectPokemonPaginationPages = createSelector(
    getPokemonModuleFeatureState, (state: PokemonModuleState) => state.pokemonPagination.pages
);

export const selectPokemonPaginationModel = createSelector(
    selectPokemonPaginationPages,
    (pages) => ({
        pages
    })
);
