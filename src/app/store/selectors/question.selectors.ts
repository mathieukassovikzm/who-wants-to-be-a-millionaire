import { createSelector } from '@ngrx/store';
import { getQuestionsState } from './../reducers/index';
import * as fromQuestions from './../reducers/question.reducer';

export const getAllQuestions = createSelector(
  getQuestionsState,
  fromQuestions.getQuestionsData
);

export const getQuestionsCurrentQuestion = createSelector(
  getQuestionsState,
  fromQuestions.getQuestionsCurrentQuestion
);

export const getQuestionsLoaded = createSelector(
  getQuestionsState,
  fromQuestions.getQuestionsLoaded
);

export const getQuestionsLoading = createSelector(
  getQuestionsState,
  fromQuestions.getQuestionsLoading
);
