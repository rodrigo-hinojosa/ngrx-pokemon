import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadPokemonDetails } from '@pokemon/state/actions';
import { PokemonDetailState } from '@pokemon/state/reducers';
import { selectPokemonDetailModel } from '@pokemon/state/selectors/pokemon-detail.selectors';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-pokemon-detail',
    templateUrl: './pokemon-detail.component.html',
    styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {

    // -----------------------------------------------------------------------------------------------------
    // @ Public variables
    // -----------------------------------------------------------------------------------------------------
    currentPokemonState$: Subscription;
    urlParamSubscription$: Subscription;
    pokemonDetailState$: Observable<PokemonDetailState>;

    /**
     * Constructor
     * @param {Store} store
     * @param {Location} location
     * @param {ActivatedRoute} router
     */
    constructor(private store: Store,
                private location: Location,
                private router: ActivatedRoute) { }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    ngOnInit(): void {
        this.pokemonDetailState$ = this.store.select(selectPokemonDetailModel);
        this.urlParamSubscription$ = this.router.params.subscribe(({ name }) => {
            this.store.dispatch(loadPokemonDetails({ name }));
        });
        this.currentPokemonState$ = this.store.select(selectPokemonDetailModel).subscribe((pokemonDetailState: PokemonDetailState) => {
            if (pokemonDetailState.pokemon) {
                this.updateUrlPath(pokemonDetailState.pokemon.name);
            }
        });
    }

    ngOnDestroy(): void {
        this.urlParamSubscription$.unsubscribe();
        this.currentPokemonState$.unsubscribe();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * get previous/next pokemon
     * @returns {void}
     */
    previousOrNext(pokemonID: number): void {
        this.store.dispatch(loadPokemonDetails({ name: pokemonID.toString() }));
    }

    /**
     * get previous/next pokemon
     * @returns {void}
     */
    updateUrlPath(pokemonName: string): void {
        this.location.go(`/pokemon/${pokemonName}`);
    }
}
