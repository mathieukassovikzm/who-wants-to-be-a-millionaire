import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromInfosApp from './infos-app.reducer';

export interface AppState {
  infosApp: fromInfosApp.InfosAppState;
}

export const reducers: ActionReducerMap<AppState> = {
  infosApp: fromInfosApp.infosAppReducer,
};

export const getAppState = createFeatureSelector<AppState>('appState');

export const getInfosAppState = createSelector(
  getAppState,
  (state: AppState) => state.infosApp
);

