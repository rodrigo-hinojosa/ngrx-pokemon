import { createAction } from '@ngrx/store';

export const showLoaders = createAction(
    '[Loader] Show Loaders'
);

export const hideLoaders = createAction(
    '[Loader] Hide Loaders'
);

