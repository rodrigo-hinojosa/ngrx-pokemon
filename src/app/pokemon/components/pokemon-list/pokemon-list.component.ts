import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPokemonPaginations } from '@pokemon/state/actions';
import { PokemonPaginationState } from '@pokemon/state/reducers';
import { selectPokemonPaginationModel } from '@pokemon/state/selectors/pokemon-pagination.selectors';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

    // -----------------------------------------------------------------------------------------------------
    // @ Public variables
    // -----------------------------------------------------------------------------------------------------
    pokemonPaginationState$: Observable<PokemonPaginationState>;

    /**
     * Constructor
     * @param {Store} store
     */
    constructor(private store: Store) { }

    ngOnInit(): void {
        this.pokemonPaginationState$ = this.store.select(selectPokemonPaginationModel);
        this.store.dispatch(loadPokemonPaginations());
    }
}
