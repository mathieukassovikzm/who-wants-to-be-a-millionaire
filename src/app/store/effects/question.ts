import { Injectable } from '@angular/core';
import { TypeSound } from '@app/models/enum-type-sound';
import { AudioService } from '@app/services/audio.service';
import { DatasService } from '@app/services/question.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ActLoadQuestions, ActLoadQuestionsFail, ActLoadQuestionsSuccess, ActNextQuestion, ActSetAnswerChosen, ActSetQuestionAnswerRight, ActSetQuestionAnswerWrong, QuestionsActionTypes } from '../actions/questions.actions';

@Injectable()

export class QuestionsEffects {
  constructor(
    private actions$: Actions,
    private questionService: DatasService,
    private audioService: AudioService) {
  }

  ActLoadQuestions$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType<ActLoadQuestions>(QuestionsActionTypes.LOAD_QUESTIONS),
        switchMap(action =>
          this.questionService.getQuestionsFromServeur()
            .pipe(
              map(questions => new ActLoadQuestionsSuccess(questions)),
              catchError(error => of(new ActLoadQuestionsFail(error)))
            ))
      );
    }
  );

  ActNextQuestion$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<ActNextQuestion>(QuestionsActionTypes.NEXT_QUESTION),
        switchMap(async (action) => {
          if (action.payload < 5) {
            this.audioService.picCurrentSound(TypeSound.First5Questions);
            this.audioService.play();
          } else if (action.payload < 5) {
            this.audioService.picCurrentSound(TypeSound.QuestionSuspense);
            this.audioService.play();
          } else {
            this.audioService.picCurrentSound(TypeSound.QuestionSuspense2);
            this.audioService.play();
          }
        })
      ),
    { dispatch: false }
  );

  ActSetAnswerChosen$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<ActSetAnswerChosen>(QuestionsActionTypes.SET_ANSWER_CHOSEN),
        switchMap(async () => {
          this.audioService.picCurrentSound(TypeSound.QuestionPicked);
          this.audioService.play();
        })
      ),
    { dispatch: false }
  );

  ActSetQuestionAnswerRight$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<ActSetQuestionAnswerRight>(QuestionsActionTypes.SET_QUESTION_ANSWER_RIGHT),
        switchMap(async () => {
          this.audioService.picCurrentSound(TypeSound.QuestionWin);
          this.audioService.play();
        })
      ),
    { dispatch: false }
  );

  ActSetQuestionAnswerWrong$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<ActSetQuestionAnswerWrong>(QuestionsActionTypes.SET_QUESTION_ANSWER_WRONG),
        switchMap(async () => {
          this.audioService.picCurrentSound(TypeSound.QuestionLose);
          this.audioService.play();
        })
      ),
    { dispatch: false }
  );
}
