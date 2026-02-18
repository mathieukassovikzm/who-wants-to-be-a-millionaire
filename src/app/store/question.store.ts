import { computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerModel } from '@app/models/answer-model';
import { TypeSound } from '@app/models/enum-type-sound';
import { QuestionModel } from '@app/models/question-model';
import { DatasService } from '@app/services/datas.service';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { AudioStore } from './audio.store';

type QuestionsState = {
  lstQuestions: QuestionModel[];
  currentQuestionId: number;
  answerChosen: number;
  displayAnswer: boolean;
  jokerFiftyUsed: boolean;
  jokerPublicUsed: boolean;
  jokerCallUsed: boolean;
  loaded: boolean;
  loading: boolean;
};

const initialState: QuestionsState = {
  lstQuestions: [] as QuestionModel[],
  currentQuestionId: -1,
  answerChosen: -1,
  displayAnswer: false,
  jokerFiftyUsed: false,
  jokerPublicUsed: false,
  jokerCallUsed: false,
  loaded: false,
  loading: false
};

export function getRandomInt(max): number {
  return Math.floor(Math.random() * max);
}

export const QuestionsStore = signalStore(
  { providedIn: 'root' },
  withState<QuestionsState>(initialState),
  withComputed((store, route = inject(ActivatedRoute)) => ({
    getCurrentQuestion: computed(() => {
      const index = store.currentQuestionId();
      const question = store.lstQuestions()?.find(q => q.id == index);
      return question;
    }),
  })),
  withComputed((store) => ({
    getAllGoodAnsweredQuestions: computed(() => {
      const lstQt = store.lstQuestions();
      if (lstQt) {
        return lstQt && lstQt.filter(qt => qt.goodAnswer === true);
      } else {
        return [] as QuestionModel[];
      }
    }),
  })),
  withMethods((
    store,
    datasService = inject(DatasService),
    audioStore = inject(AudioStore),
  ) => ({
    getQuestion(id: number): QuestionModel {
      return store.lstQuestions().find(q => q.id == id);
    },
    getGoodAnswerOfQuestion(id: number): AnswerModel {
      const question = this.getQuestion(id);
      return question.answers.find(answer => answer.id === question.correctAnswer);
    },

    ActLoadQuestions(): void {
      const questions = datasService.getQuestionsFromServeur();

      // On affiche toutes les réponses
      let patchedLst = questions.map((qt) => {
        const answerPatched = qt.answers.map((answer) => {
          return { ...answer, visible: true };
        });
        return { ...qt, answers: answerPatched };
      });

      // On range les questions dans l'ordre décroissant d'id
      patchedLst = patchedLst.sort((a, b) => b.id - a.id);

      patchState(store, {
        lstQuestions: patchedLst,
        loading: false,
        loaded: true
      });
    },
    ActSetCurrentQuestionId(questionId: number): void {
      if (0 <= questionId && questionId < 5) {
        audioStore.picCurrentSound(TypeSound.First5Questions);
      } else if (5 <= questionId && questionId < 10) {
        audioStore.picCurrentSound(TypeSound.QuestionSuspense);
      } else if (10 <= questionId && questionId < 15) {
        audioStore.picCurrentSound(TypeSound.QuestionSuspense2);
      }

      patchState(store, {
        currentQuestionId: questionId
      });
    },
    ActSetAnswerChosen(answerId: number): void {
      audioStore.picCurrentSound(TypeSound.QuestionPicked);

      patchState(store, {
        answerChosen: answerId
      });
    },
    ActSetQuestionAnswer(payload: number, isGood: boolean): void {
      if (isGood) {
        audioStore.picCurrentSound(TypeSound.QuestionWin);
      } else {
        audioStore.picCurrentSound(TypeSound.QuestionLose);
      }
      // on cherche la question à modifier dans la liste des questions
      const patchedLst = store.lstQuestions().map(qt => {
        if (qt.id === payload) {
          return {
            ...qt,
            goodAnswer: isGood
          };
        } else {
          return qt;
        }
      });

      patchState(store, {
        lstQuestions: patchedLst
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
    ActJokerFiftyToFalse(): void {
      const questionId = store.currentQuestionId();

      let currentQuestionMdf = this.getQuestion(questionId);
      // Get first index to hide
      let randomIndex1 = -1;
      do {
        randomIndex1 = getRandomInt(4);
      } while (randomIndex1 == currentQuestionMdf.correctAnswer);

      // Get first index to hide
      let answersCopy = currentQuestionMdf.answers.map(
        (answer: AnswerModel) => {
          if (answer.id == randomIndex1) {
            answer = { ...answer, visible: false };
          }
          return answer;
        }
      );

      // Get second index to hide
      let randomIndex2 = -1;
      do {
        randomIndex2 = getRandomInt(4);
      } while (randomIndex2 == currentQuestionMdf.correctAnswer || randomIndex2 == randomIndex1);
      answersCopy = answersCopy.map(
        (answer: AnswerModel) => {
          if (answer.id == randomIndex2) {
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

      const patchedLst = store.lstQuestions().map(qt => {
        if (qt.id == questionId) {
          return currentQuestionMdf;
        } else {
          return qt;
        }
      });

      patchState(store, {
        lstQuestions: patchedLst,
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