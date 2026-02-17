import { computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerModel } from '@app/models/answer-model';
import { QuestionEntity } from '@app/models/question-entity';
import { QuestionModel } from '@app/models/question-model';
import { DatasService } from '@app/services/datas.service';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

type QuestionsState = {
  entities: QuestionEntity;
  answerChosen: number;
  displayAnswer: boolean;
  jokerFiftyUsed: boolean;
  jokerPublicUsed: boolean;
  jokerCallUsed: boolean;
  loaded: boolean;
  loading: boolean;
};

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

export const QuestionsStore = signalStore(
  { providedIn: 'root' },
  withState<QuestionsState>(initialState),
  withComputed((store, route = inject(ActivatedRoute)) => ({
    getAllQuestions: computed(() => {
      const lstQuestions = store.entities().lstQuestions;
      return lstQuestions && Object.keys(lstQuestions).map(id => lstQuestions[parseInt(id, 10)]);
    }),
    getAllQuestionsReverse: computed(() => {
      const lstQuestions = store.entities().lstQuestions;
      return lstQuestions && Object.keys(lstQuestions).map(id => lstQuestions[parseInt(id, 10)]).reverse();
    }),
    getCurrentQuestion: computed(() => {
      const index = route.snapshot.params.questionId as number;
      return store.entities().lstQuestions && store.entities().lstQuestions[index];
    }),
    getQuestionId: computed(() => {
    }),
  })),
  withComputed((store) => ({
    getAllGoodAnsweredQuestions: computed(() => {
      const lstQt = store.getAllQuestions();
      if (lstQt) {
        return lstQt && lstQt.filter(qt => qt.goodAnswer === true);
      } else {
        return [] as QuestionModel[];
      }
    }),
  })),
  withMethods((store, datasService = inject(DatasService)) => ({
    getQuestion(id: number): QuestionModel {
      return store.entities().lstQuestions[id];
    },
    getGoodAnswerOfQuestion(id: number): AnswerModel {
      const question = this.getQuestion(id);
      return question.answers.find(answer => answer.id === question.correctAnswer);
    },

    ActLoadQuestions(): void {
      const questions = datasService.getQuestionsFromServeur();
      const entityQt = toEntityQuestion(questions, store.entities());

      patchState(store, {
        entities: entityQt,
        loading: false,
        loaded: true
      });
    },
    ActNextQuestion(): void {

    },
    ActSetAnswerChosen(answerId: number): void {
      patchState(store, {
        answerChosen: answerId
      });
    },
    ActSetQuestionAnswerRight(payload: number): void {
      let newEntityQtRight = {} as QuestionEntity;
      newEntityQtRight.lstQuestions = Object.keys(store.entities.lstQuestions).map(
        id => {
          if (store.entities.lstQuestions[parseInt(id, 10)].id == payload) {
            return {
              ...store.entities.lstQuestions[payload],
              goodAnswer: true
            };
          } else {
            return store.entities.lstQuestions[parseInt(id, 10)];
          }
        }
      );
      patchState(store, {
        entities: newEntityQtRight,
      });
    },
    ActSetQuestionAnswerWrong(payload: number): void {
      let newEntityQtWrong = {} as QuestionEntity;
      newEntityQtWrong.lstQuestions = Object.keys(store.entities.lstQuestions).map(
        id => {
          if (store.entities.lstQuestions[parseInt(id, 10)].id == payload) {
            return {
              ...store.entities.lstQuestions[payload],
              goodAnswer: false
            };
          } else {
            return store.entities.lstQuestions[parseInt(id, 10)];
          }
        }
      );
      patchState(store, {
        entities: newEntityQtWrong,
      });
    },
    ActResetAnswerChosen(): void {
      patchState(store, {
        answerChosen: -1
      });
    },
    ActDisplayAnswer(): void {
      patchState(store, {
        displayAnswer: true
      });
    },
    ActHideAnswer(): void {
      patchState(store, {
        displayAnswer: false
      });
    },
    ActJokerFiftyToFalse(payload: number): void {
      const questionId = payload;
      const questionsEntity = store.entities;

      let currentQuestionMdf = questionsEntity.lstQuestions[questionId];
      // Get first index to hide
      let randomIndex1 = -1;
      do {
        randomIndex1 = getRandomInt(4);
      } while (randomIndex1 === currentQuestionMdf.correctAnswer);
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
      } while (randomIndex2 === currentQuestionMdf.correctAnswer || randomIndex2 === randomIndex1);
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

      let newLstQt = Object.keys(store.entities.lstQuestions).map(
        id => {
          if (store.entities.lstQuestions[parseInt(id, 10)].id == questionId) {
            return currentQuestionMdf;
          } else {
            return store.entities.lstQuestions[parseInt(id, 10)];
          }
        }
      );

      let newEntity = {} as QuestionEntity;
      newEntity.lstQuestions = newLstQt;

      patchState(store, {
        entities: newEntity,
        jokerFiftyUsed: true
      });
    },
    ActJokerCallToFalse(): void {
      patchState(store, {
        jokerCallUsed: true
      });
    },
    ActJokerPublicToFalse(): void {
      patchState(store, {
        jokerPublicUsed: true
      });
    },
  }))
);