import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, withLatestFrom, filter } from 'rxjs/operators';
import { AppState } from '@app/store/reducers';
import * as questionsActions from '@app/store/actions/questions.actions';
import { QuestionService } from '@app/services';

@Injectable()

export class QuestionsEffects {
  constructor(
    private actions$: Actions,
    private questionService: QuestionService) {
  }

  ActLoadQuestions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<questionsActions.ActLoadQuestions>(questionsActions.QuestionsActionTypes.LOAD_QUESTIONS),
      switchMap(action =>
        this.questionService.getQuestionsFromServeur()
          .pipe(
            map(questions => new questionsActions.ActLoadQuestionsSuccess(questions)),
            catchError(error => of(new questionsActions.ActLoadQuestionsFail(error)))
          ))
    );
  });
}
