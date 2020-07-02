import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProfile } from '@core/root-data/state/selectors';
import { IProfile } from '@shared/models';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-profile-detail',
    templateUrl: './profile-detail.component.html',
    styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

    // -----------------------------------------------------------------------------------------------------
    // @ Public variables
    // -----------------------------------------------------------------------------------------------------
    profileState$: Observable<IProfile>;

    /**
     * Constructor
     * @param {Store} store
     */
    constructor(private store: Store) { }

    ngOnInit(): void {
        this.profileState$ = this.store.select(selectProfile);
    }
}
