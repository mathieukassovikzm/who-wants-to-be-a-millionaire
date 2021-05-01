import { QuestionModel } from '@app/models/question-model';
import { Action } from '@ngrx/store';
import { QuestionsActionTypes, QuestionsActions } from '../actions/questions.actions';

export interface QuestionsState {
  entities: { [id: number]: QuestionModel };
  jokerFiftyUsed: boolean;
  jokerPublicUsed: boolean;
  jokerCallUsed: boolean;
  loaded: boolean;
  loading: boolean;
}

// Initial state of the store
const initialState: QuestionsState = {
  entities: {},
  jokerFiftyUsed: false,
  jokerPublicUsed: false,
  jokerCallUsed: false,
  loaded: false,
  loading: false
};

export function questionReducer(
  state = initialState,
  incomingAction: Action
): QuestionsState {
  const action = incomingAction as QuestionsActions;
  switch (action.type) {
    case QuestionsActionTypes.LOAD_QUESTIONS:
      return {
        ...state,
        loading: true
      };
    case QuestionsActionTypes.LOAD_QUESTIONS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    case QuestionsActionTypes.LOAD_QUESTIONS_SUCCESS:
      const questions = action.payload;
      const entities = questions.reduce(
        (ents: { [id: number]: QuestionModel }, question: QuestionModel) => {
          return {
            ...ents,
            [question.id]: question
          };
        }, {
        ...state.entities,
      }
      );
      return {
        ...state,
        entities,
        loading: false,
        loaded: true
      };
    case QuestionsActionTypes.JOKER_FIFTY_TO_FALSE:
      return {
        ...state,
        jokerFiftyUsed: true
      };
    case QuestionsActionTypes.JOKER_CALL_TO_FALSE:
      return {
        ...state,
        jokerCallUsed: true
      };
    case QuestionsActionTypes.JOKER_PUBLIC_TO_FALSE:
      return {
        ...state,
        jokerPublicUsed: true
      };
    default:
      return state;
  }
}

export const getQuestionsEntities = (state: QuestionsState) => state.entities;
export const getQuestionsJokerFiftyUsed = (state: QuestionsState) => state.jokerFiftyUsed;
export const getQuestionsJokerCallUsed = (state: QuestionsState) => state.jokerCallUsed;
export const getQuestionsJokerPublicUsed = (state: QuestionsState) => state.jokerPublicUsed;
export const getQuestionsLoading = (state: QuestionsState) => state.loading;
export const getQuestionsLoaded = (state: QuestionsState) => state.loaded;
