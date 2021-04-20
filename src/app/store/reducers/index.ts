import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromInfosApp from './infos-app.reducer';
import * as fromQuestions from './question.reducer';

export interface AppState {
  infosApp: fromInfosApp.InfosAppState;
  questions: fromQuestions.QuestionsState;
}

export const reducers: ActionReducerMap<AppState> = {
  infosApp: fromInfosApp.infosAppReducer,
  questions: fromQuestions.questionReducer
};

export const getAppState = createFeatureSelector<AppState>('appState');

export const getInfosAppState = createSelector(
  getAppState,
  (state: AppState) => state.infosApp
);

export const getQuestionsState = createSelector(
  getAppState,
  (state: AppState) => state.questions
);
