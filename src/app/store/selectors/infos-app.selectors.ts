import { createSelector } from '@ngrx/store';
import { getInfosAppState } from './../reducers/index';
import * as fromInfosApp from './../reducers/infos-app.reducer';

export const getInfosAppTitle = createSelector(
  getInfosAppState,
  fromInfosApp.getInfosAppTitle
);

export const getInfosAppCurrentYear = createSelector(
  getInfosAppState,
  fromInfosApp.getInfosAppCurrentYear
);

export const getInfosAppMenuOpened = createSelector(
  getInfosAppState,
  fromInfosApp.getInfosAppMenuOpened
);
