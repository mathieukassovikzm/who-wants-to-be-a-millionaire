import { QuestionModel } from '@app/models/question-model';
import { Action } from '@ngrx/store';
import { QuestionsActionTypes, QuestionsActions } from '../actions/questions.actions';

export interface QuestionsState {
  data: QuestionModel[];
  currentQuestion: number;
  loaded: boolean;
  loading: boolean;
}

// Initial state of the store
const initialState: QuestionsState = {
  data: [],
  currentQuestion: 0,
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
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true
      };
    default:
      return state;
  }
}

export const getQuestionsData = (state: QuestionsState) => state.data;
export const getQuestionsCurrentQuestion = (state: QuestionsState) => state.currentQuestion;
export const getQuestionsLoading = (state: QuestionsState) => state.loading;
export const getQuestionsLoaded = (state: QuestionsState) => state.loaded;
