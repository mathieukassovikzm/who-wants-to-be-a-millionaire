
import { QuestionModel } from '@app/models/question-model';
import { Action } from '@ngrx/store';

/* Enum les types d'actions possibles*/
export enum QuestionsActionTypes {
  LOAD_QUESTIONS = '[Questions] Load Questions',
  LOAD_QUESTIONS_FAIL = '[Questions] Load Questions Fail',
  LOAD_QUESTIONS_SUCCESS = '[Questions] Load Questions Success',
  INCREMENT_QUESTION_ID = '[Questions] Increment Question ID',
  JOKER_FIFTY_TO_FALSE = '[Questions] Joker Fifty To False',
  JOKER_CALL_TO_FALSE = '[Questions] Joker Call To False',
  JOKER_PUBLIC_TO_FALSE = '[Questions] Joker Public To False',
}

export class ActLoadQuestions implements Action {
  readonly type = QuestionsActionTypes.LOAD_QUESTIONS;
}

export class ActLoadQuestionsFail implements Action {
  readonly type = QuestionsActionTypes.LOAD_QUESTIONS_FAIL;
  constructor(public payload: any) { }
}

export class ActLoadQuestionsSuccess implements Action {
  readonly type = QuestionsActionTypes.LOAD_QUESTIONS_SUCCESS;
  constructor(public payload: QuestionModel[]) { }
}

export class ActIncrementQuestionId implements Action {
  readonly type = QuestionsActionTypes.INCREMENT_QUESTION_ID;
}

export class ActJokerFiftyToFalse implements Action {
  readonly type = QuestionsActionTypes.JOKER_FIFTY_TO_FALSE;
}

export class ActJokerCallToFalse implements Action {
  readonly type = QuestionsActionTypes.JOKER_CALL_TO_FALSE;
}

export class ActJokerPublicToFalse implements Action {
  readonly type = QuestionsActionTypes.JOKER_PUBLIC_TO_FALSE;
}

/* Union Action: Permet de limiter les types d'actions aux actions possibles*/
export type QuestionsActions =
  | ActLoadQuestions
  | ActLoadQuestionsFail
  | ActLoadQuestionsSuccess
  | ActIncrementQuestionId
  | ActJokerFiftyToFalse
  | ActJokerCallToFalse
  | ActJokerPublicToFalse;
