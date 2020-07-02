import { createFeatureSelector } from '@ngrx/store';
import { PokemonModuleState } from '@pokemon/state/reducers';

export const pokemonModuleFeatureKey = 'pokemonModule';
export const getPokemonModuleFeatureState = createFeatureSelector<PokemonModuleState>(pokemonModuleFeatureKey);
