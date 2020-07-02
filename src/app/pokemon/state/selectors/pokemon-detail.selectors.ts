import { createSelector } from '@ngrx/store';
import { PokemonModuleState } from '@pokemon/state/reducers';
import { getPokemonModuleFeatureState } from '.';

export const selectPokemonDetail = createSelector(
    getPokemonModuleFeatureState, (state: PokemonModuleState) => state.pokemonDetail.pokemon
);
export const selectPokemonDetailModel = createSelector(
    selectPokemonDetail,
    (pokemon) => ({
        pokemon
    })
);
