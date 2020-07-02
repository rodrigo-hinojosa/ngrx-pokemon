import { Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';

export class Utils {
    static getState(store: Store, selectState: any): any {
        let state: any;
        store.pipe(select(selectState), take(1)).subscribe(
            s => state = s
        );
        return state;
    }
}
