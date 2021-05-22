
import { QuestionModel } from '@app/models/question-model';
import { Action } from '@ngrx/store';

/* Enum les types d'actions possibles*/
export enum QuestionsActionTypes {
  LOAD_QUESTIONS = '[Questions] Load Questions',
  LOAD_QUESTIONS_FAIL = '[Questions] Load Questions Fail',
  LOAD_QUESTIONS_SUCCESS = '[Questions] Load Questions Success',
  SET_ANSWER_CHOSEN = '[Questions] Set Answer Chosen',
  SET_QUESTION_ANSWER_RIGHT = '[Questions] Set Question Answer Right',
  SET_QUESTION_ANSWER_WRONG = '[Questions] Set Question Answer Wrong',
  RESET_ANSWER_CHOSEN = '[Questions] Reset Answer Chosen',
  DISPLAY_ANSWER = '[Questions] Display Answer',
  HIDE_ANSWER = '[Questions] Hide Answer',
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

export class ActSetAnswerChosen implements Action {
  readonly type = QuestionsActionTypes.SET_ANSWER_CHOSEN;
  constructor(public payload: number) { }
}

export class ActSetQuestionAnswerRight implements Action {
  readonly type = QuestionsActionTypes.SET_QUESTION_ANSWER_RIGHT;
  constructor(public payload: number) { }
}

export class ActSetQuestionAnswerWrong implements Action {
  readonly type = QuestionsActionTypes.SET_QUESTION_ANSWER_WRONG;
  constructor(public payload: number) { }
}

export class ActResetAnswerChosen implements Action {
  readonly type = QuestionsActionTypes.RESET_ANSWER_CHOSEN;
}

export class ActDisplayAnswer implements Action {
  readonly type = QuestionsActionTypes.DISPLAY_ANSWER;
}

export class ActHideAnswer implements Action {
  readonly type = QuestionsActionTypes.HIDE_ANSWER;
}

export class ActJokerFiftyToFalse implements Action {
  readonly type = QuestionsActionTypes.JOKER_FIFTY_TO_FALSE;
  constructor(public payload: number) { }
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
  | ActSetAnswerChosen
  | ActSetQuestionAnswerRight
  | ActSetQuestionAnswerWrong
  | ActResetAnswerChosen
  | ActDisplayAnswer
  | ActHideAnswer
  | ActJokerFiftyToFalse
  | ActJokerCallToFalse
  | ActJokerPublicToFalse;
