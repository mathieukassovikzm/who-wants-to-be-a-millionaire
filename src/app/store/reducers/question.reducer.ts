import { AnswerModel } from '@app/models/answer-model';
import { QuestionEntity } from '@app/models/question-entity';
import { QuestionModel } from '@app/models/question-model';
import { Action } from '@ngrx/store';
import { QuestionsActionTypes, QuestionsActions } from '../actions/questions.actions';

export interface QuestionsState {
  entities: QuestionEntity;
  answerChosen: number;
  displayAnswer: boolean;
  jokerFiftyUsed: boolean;
  jokerPublicUsed: boolean;
  jokerCallUsed: boolean;
  loaded: boolean;
  loading: boolean;
}

// Initial state of the store
const initialState: QuestionsState = {
  entities: {} as QuestionEntity,
  answerChosen: -1,
  displayAnswer: false,
  jokerFiftyUsed: false,
  jokerPublicUsed: false,
  jokerCallUsed: false,
  loaded: false,
  loading: false
};

export function toEntityQuestion(
  questions: QuestionModel[],
  questionsEntity: QuestionEntity
): QuestionEntity {
  const lstQuestions = questions.reduce(
    (entities: { [id: number]: QuestionModel }, question: QuestionModel) => {
      return {
        ...entities,
        [question.id]: question
      };
    }, {
    ...questionsEntity,
  }
  );
  const entQt = {
    lstQuestions: lstQuestions
  }
  return entQt;
}

export function getRandomInt(max): number {
  return Math.floor(Math.random() * max);
}

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
      const entityQt = toEntityQuestion(questions, state.entities);
      return {
        ...state,
        entities: entityQt,
        loading: false,
        loaded: true
      };
    case QuestionsActionTypes.SET_ANSWER_CHOSEN:
      const answerId = action.payload;
      return {
        ...state,
        answerChosen: answerId
      };
    case QuestionsActionTypes.RESET_ANSWER_CHOSEN:
      return {
        ...state,
        answerChosen: -1
      };
    case QuestionsActionTypes.DISPLAY_ANSWER:
      return {
        ...state,
        displayAnswer: true
      };
    case QuestionsActionTypes.HIDE_ANSWER:
      return {
        ...state,
        displayAnswer: false
      };
    case QuestionsActionTypes.JOKER_FIFTY_TO_FALSE:
      const questionId = action.payload;
      const questionsEntity = state.entities;

      let currentQuestionMdf = questionsEntity.lstQuestions[questionId];
      // Get first index to hide
      let randomIndex1 = -1;
      do {
        randomIndex1 = getRandomInt(4);
      } while (randomIndex1 === currentQuestionMdf.goodAnswer);
      // Get first index to hide
      let answersCopy = currentQuestionMdf.answers.map(
        (answer: AnswerModel) => {
          if (answer.id === randomIndex1) {
            answer = { ...answer, visible: false };
          }
          return answer;
        }
      );
      // Get second index to hide
      let randomIndex2 = -1;
      do {
        randomIndex2 = getRandomInt(4);
      } while (randomIndex2 === currentQuestionMdf.goodAnswer || randomIndex2 === randomIndex1);
      answersCopy = answersCopy.map(
        (answer: AnswerModel) => {
          if (answer.id === randomIndex2) {
            answer = { ...answer, visible: false };
          }
          return answer;
        }
      );

      // Current Question with modified answered
      currentQuestionMdf = {
        ...currentQuestionMdf,
        answers: answersCopy
      };

      let newLstQt = Object.keys(state.entities.lstQuestions).map(
        id => {
          if (state.entities.lstQuestions[parseInt(id, 10)].id == questionId) {
            return currentQuestionMdf;
          } else {
            return state.entities.lstQuestions[parseInt(id, 10)];
          }
        }
      );

      let newEntity = {} as QuestionEntity;
      newEntity.lstQuestions = newLstQt;

      return {
        ...state,
        entities: newEntity,
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
export const getQuestionsAnswerChosen = (state: QuestionsState) => state.answerChosen;
export const getQuestionsDisplayAnswer = (state: QuestionsState) => state.displayAnswer;
export const getQuestionsJokerFiftyUsed = (state: QuestionsState) => state.jokerFiftyUsed;
export const getQuestionsJokerCallUsed = (state: QuestionsState) => state.jokerCallUsed;
export const getQuestionsJokerPublicUsed = (state: QuestionsState) => state.jokerPublicUsed;
export const getQuestionsLoading = (state: QuestionsState) => state.loading;
export const getQuestionsLoaded = (state: QuestionsState) => state.loaded;
