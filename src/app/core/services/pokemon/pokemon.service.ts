import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { IPokemonPagination, IPokemon } from '@shared/models';
import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    /**
     * Constructor
     * @param {HttpClient} httpClient
     */
    constructor(private httpClient: HttpClient) { }

    /**
     * Call httpClient method
     * @returns {Observable<IPokemonPagination>}
     */
    getPokemonPaginationInit(): Observable<IPokemonPagination> {
        return this.httpClient
            .get<IPokemonPagination>(`${environment.url_api}/?limit=151`)
            .pipe(
                retry(2),
                map((response: IPokemonPagination) => response)
            );
    }

    /**
     * Call httpClient method
     * @returns {Observable<IPokemonPagination>}
     */
    getPokemonPaginationByPage(page: string): Observable<IPokemonPagination> {
        return this.httpClient
            .get<IPokemonPagination>(page).pipe(
                retry(2),
                map((response: IPokemonPagination) => response)
            );
    }

    /**
     * Call httpClient method
     * @returns {Observable<IPokemon>}
     */
    getPokemonByName(pokemonName: string): Observable<IPokemon> {
        return this.httpClient
            .get<IPokemon>(`${environment.url_api}/${pokemonName}`)
            .pipe(
                retry(2),
                map((response: IPokemon) => response)
            );
    }
}
