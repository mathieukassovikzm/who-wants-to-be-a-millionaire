import { createSelector } from '@ngrx/store';
import { getInfosAppState } from './../reducers/index';
import * as fromInfosApp from './../reducers/infos-app.reducer';

export const getInfosAppMenuOpened = createSelector(
  getInfosAppState,
  fromInfosApp.getInfosAppMenuOpened
);
