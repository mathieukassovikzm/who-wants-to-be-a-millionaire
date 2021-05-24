import { ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromInfosApp from './infos-app.reducer';
import * as fromQuestions from './question.reducer';

export interface AppState {
  infosAppReducer: fromInfosApp.InfosAppState;
  questionsReducer: fromQuestions.QuestionsState;
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export const reducers: ActionReducerMap<AppState> = {
  infosAppReducer: fromInfosApp.infosAppReducer,
  questionsReducer: fromQuestions.questionReducer,
  routerReducer: fromRouter.routerReducer
};


export const getAppState = createFeatureSelector<AppState>('appState');

export const getInfosAppState = createSelector(
  getAppState,
  (state: AppState) => state.infosAppReducer
);

export const getQuestionsState = createSelector(
  getAppState,
  (state: AppState) => state.questionsReducer
);

export const getRouterState = createSelector(
  getAppState,
  (state: AppState) => state.routerReducer
);

/*
 * Function called everytime we navigate
 */
export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl>{
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const params = state.params;

    return { url, queryParams, params };
  }
}
