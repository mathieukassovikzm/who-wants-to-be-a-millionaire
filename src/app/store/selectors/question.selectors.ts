import { QuestionModel } from '@app/models/question-model';
import { createSelector } from '@ngrx/store';
import { getQuestionsState, RouterStateUrl } from './../reducers/index';
import * as fromQuestions from './../reducers/question.reducer';
import * as fromRouter from '@ngrx/router-store';
import { getRouterState } from './../reducers/index';
import { QuestionEntity } from '@app/models/question-entity';

export const getQuestionsEntities = createSelector(
  getQuestionsState,
  fromQuestions.getQuestionsEntities
);

export const getAllQuestions = createSelector(
  getQuestionsEntities,
  (entities) => {
    return entities.lstQuestions && Object.keys(entities.lstQuestions).map(id => entities.lstQuestions[parseInt(id, 10)]);
  }
);

export const getAllQuestionsReverse = createSelector(
  getQuestionsEntities,
  (entities) => {
    return entities.lstQuestions && Object.keys(entities.lstQuestions).map(id => entities.lstQuestions[parseInt(id, 10)]).reverse();
  }
);

export const getCurrentQuestion = createSelector(
  getQuestionsEntities,
  getRouterState,
  (entities: QuestionEntity, router: fromRouter.RouterReducerState<RouterStateUrl>): QuestionModel => {
    let index = router.state.params.questionId as number;
    return router.state && entities.lstQuestions && entities.lstQuestions[index];
  }
);

export const getQuestionId = createSelector(
  getRouterState,
  (router: fromRouter.RouterReducerState<RouterStateUrl>) => {
    return router.state.params.questionId
  }
);

export const getQuestion = (id: number) => createSelector(
  getQuestionsEntities,
  (entities: QuestionEntity): QuestionModel => {
    return entities.lstQuestions && entities.lstQuestions[id];
  }
);

export const getGoodAnswerOfQuestion = (id: number) => createSelector(
  getQuestion(id),
  (question) => question.goodAnswer
);

export const getQuestionsAnswerChosen = createSelector(
  getQuestionsState,
  fromQuestions.getQuestionsAnswerChosen
);

export const getQuestionsDisplayAnswer = createSelector(
  getQuestionsState,
  fromQuestions.getQuestionsDisplayAnswer
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
