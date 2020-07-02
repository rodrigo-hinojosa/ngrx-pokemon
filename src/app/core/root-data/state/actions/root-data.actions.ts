import { createAction, props } from '@ngrx/store';
import { IRootData } from '@shared/models';

export const loadRootData = createAction(
    '[RootData] Load RootDatas'
);

export const loadRootDataSuccess = createAction(
    '[RootData] Load RootDatas Success',
    props<{ rootData: IRootData }>()
);
