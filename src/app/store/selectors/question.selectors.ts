import { QuestionModel } from '@app/models/question-model';
import { createSelector } from '@ngrx/store';
import { getQuestionsState } from './../reducers/index';
import * as fromQuestions from './../reducers/question.reducer';
import { getRouterState } from './../reducers/index';

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
  getAllQuestions,
  getQuestionsCurrentQuestionId,
  (entities: { [id: number]: QuestionModel }, questionId): QuestionModel => {
    return entities[questionId];
  }
);

export const getQuestionsLoaded = createSelector(
  getQuestionsState,
  fromQuestions.getQuestionsLoaded
);

export const getQuestionsLoading = createSelector(
  getQuestionsState,
  fromQuestions.getQuestionsLoading
);

export const getQuestionsJokerFiftyUsed = createSelector(
  getQuestionsState,
  fromQuestions.getQuestionsJokerFiftyUsed
);

export const getQuestionsJokerCallUsed = createSelector(
  getQuestionsState,
  fromQuestions.getQuestionsJokerCallUsed
);

export const getQuestionsJokerPublicUsed = createSelector(
  getQuestionsState,
  fromQuestions.getQuestionsJokerPublicUsed
);
