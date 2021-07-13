import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as questionsActions from '@app/store/actions/questions.actions';
import { QuestionService, AudioService } from '@app/services';
import { TypeSound } from '@app/models/enum-type-sound';

@Injectable()

export class QuestionsEffects {
  constructor(
    private actions$: Actions,
    private questionService: QuestionService,
    private audioService: AudioService) {
  }

  ActLoadQuestions$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType<questionsActions.ActLoadQuestions>(questionsActions.QuestionsActionTypes.LOAD_QUESTIONS),
        switchMap(action =>
          this.questionService.getQuestionsFromServeur()
            .pipe(
              map(questions => new questionsActions.ActLoadQuestionsSuccess(questions)),
              catchError(error => of(new questionsActions.ActLoadQuestionsFail(error)))
            ))
      );
    }
  );


  ActSetAnswerChosen$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<questionsActions.ActSetAnswerChosen>(questionsActions.QuestionsActionTypes.SET_ANSWER_CHOSEN),
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
        ofType<questionsActions.ActSetQuestionAnswerRight>(questionsActions.QuestionsActionTypes.SET_QUESTION_ANSWER_RIGHT),
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
        ofType<questionsActions.ActSetQuestionAnswerWrong>(questionsActions.QuestionsActionTypes.SET_QUESTION_ANSWER_WRONG),
        switchMap(async () => {
          this.audioService.picCurrentSound(TypeSound.QuestionLose);
          this.audioService.play();
        })
      ),
    { dispatch: false }
  );
}
