import { QuestionModel } from '@app/models/question-model';
import { Action } from '@ngrx/store';
import { QuestionsActionTypes, QuestionsActions } from '../actions/questions.actions';

export interface QuestionsState {
  entities: { [id: number]: QuestionModel };
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
  entities: {},
  answerChosen: -1,
  displayAnswer: false,
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
      const newEntities = action.payload;
      // let newEntities = [...state.entities];
      // let newVisiblesAnswers = [...currentQuestion.answers];

      // let randomIndex1 = -1;
      // let randomIndex2 = -1;
      // do {
      //   randomIndex1 = getRandomInt(4);
      // } while (randomIndex1 === currentQuestion.goodAnswer);
      // newVisiblesAnswers[randomIndex1].visible = false;

      // do {
      //   randomIndex2 = getRandomInt(4);
      // } while (randomIndex2 === currentQuestion.goodAnswer || randomIndex2 === randomIndex1);
      // newVisiblesAnswers[randomIndex2].visible = false;


      // let newEntities = { ...state.entities };
      // const answers = currentQuestion.answers.filter(a => a.answer === badAnswers[0].answer || a.id === currentQuestion.goodAnswer);



      // let badAnswers = [...currentQuestion.answers];
      // badAnswers.splice(currentQuestion.goodAnswer, 1);


      // badAnswers.splice(getRandomInt(3), 1);
      // badAnswers.splice(getRandomInt(2), 1);

      // let newEntities = { ...state.entities };
      // const answers = currentQuestion.answers.filter(a => a.answer === badAnswers[0].answer || a.id === currentQuestion.goodAnswer);

      return {
        ...state,
        // entities: newEntities,
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
