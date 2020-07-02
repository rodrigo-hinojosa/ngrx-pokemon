import { createAction } from '@ngrx/store';

export const showErrors = createAction(
    '[Error] Show Errors'
);

export const hideErrors = createAction(
    '[Error] Hide Errors'
);

