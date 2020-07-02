/** interface representing Pokemon data structure.
 * @interface
 * @property {number} id
 * @property {string} name
 * @property {number} height
 * @property {number} weight
 * @property {IAbilities[]} abilities
 * @property {object} sprites
 * @property {IPokemonTypes[]} types
 */
export interface IPokemon {
    id?: number;
    name?: string;
    height?: number;
    weight?: number;
    abilities?: IPokemonAbilities[];
    sprites?: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
    };
    types?: IPokemonTypes[];
}

/** interface representing Pokemon type data structure.
 * @interface
 * @property {object} type
 * @property {number} slot
 */
export interface IPokemonTypes {
    type: {
        name: string;
        url: string;
    };
    slot: number;
}

/** interface representing Pokemon abilities data structure.
 * @interface
 * @property {object} ability
 * @property {number} slot
 */
export interface IPokemonAbilities {
    ability?: {
        name?: string;
        url?: string;
    };
    slot?: number;
}

/** interface representing Pokemon pagination data structure.
 * @interface
 * @property {number} count
 * @property {string} next
 * @property {string} previous
 * @property {IPokemonPaginationItem[]} results
 * @property {boolean} active
 */
export interface IPokemonPagination {
    count?: number;
    next?: string;
    previous?: string;
    results?: IPokemonPaginationItem[];
    active?: boolean;
}

/** interface representing Pokemon pagination item data structure.
 * @interface
 * @property {string} name
 * @property {string} url
 */
export interface IPokemonPaginationItem {
    name?: string;
    url?: string;
}


