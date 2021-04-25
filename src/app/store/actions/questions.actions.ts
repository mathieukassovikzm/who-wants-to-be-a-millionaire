
import { QuestionModel } from '@app/models/question-model';
import { Action } from '@ngrx/store';

/* Enum les types d'actions possibles*/
export enum QuestionsActionTypes {
  LOAD_QUESTIONS = '[Questions] Load Questions',
  LOAD_QUESTIONS_FAIL = '[Questions] Load Questions Fail',
  LOAD_QUESTIONS_SUCCESS = '[Questions] Load Questions Success',
  INCREMENT_QUESTION_ID = '[Questions] Increment Question ID',
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

/* Union Action: Permet de limiter les types d'actions aux actions possibles*/
export type QuestionsActions =
  | ActLoadQuestions
  | ActLoadQuestionsFail
  | ActLoadQuestionsSuccess
  | ActIncrementQuestionId;
