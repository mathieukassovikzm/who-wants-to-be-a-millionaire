import { createSelector } from '@ngrx/store';
import { getQuestionsState } from './../reducers/index';
import * as fromQuestions from './../reducers/question.reducer';

export const getQuestionsEntities = createSelector(
  getQuestionsState,
  fromQuestions.getQuestionsEntities
);

export const getAllQuestions = createSelector(
  getQuestionsEntities,
  (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getAllQuestionsReverse = createSelector(
  getQuestionsEntities,
  (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]).reverse();
  }
);

export const getQuestionsCurrentQuestionId = createSelector(
  getQuestionsState,
  fromQuestions.getQuestionsCurrentQuestionId
);

export const getQuestionsCurrentQuestion = createSelector(
  getQuestionsState,
  fromQuestions.getQuestionsCurrentQuestionId
);

export const getQuestionsLoaded = createSelector(
  getQuestionsState,
  fromQuestions.getQuestionsLoaded
);

export const getQuestionsLoading = createSelector(
  getQuestionsState,
  fromQuestions.getQuestionsLoading
);
