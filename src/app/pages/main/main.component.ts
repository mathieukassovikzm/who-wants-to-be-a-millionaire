import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionModel } from '@app/models/question-model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { } from '@ngrx/router-store';

import * as fromStore from '@app/store/index';
import * as fromInfosAppSelectors from '@app/store/selectors/infos-app.selectors';
import * as fromQuestionsActions from '@app/store/actions/questions.actions';
import * as fromRouterActions from '@app/store/actions/router.actions';
import * as fromQuestionsSelectors from '@app/store/selectors/question.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  title$: Observable<string> = new Observable<string>();
  birthday$: Observable<number> = new Observable<number>();

  questions$: Observable<QuestionModel[]>;
  currentQuestionId$: Observable<number>;
  currentQuestionId: number;

  subscription: Subscription;

  constructor(public store: Store<fromStore.AppState>, private router: Router) {
    this.title$ = this.store.select<any>(fromInfosAppSelectors.getInfosAppTitle);
    this.birthday$ = this.store.select<any>(fromInfosAppSelectors.getInfosAppCurrentYear);
    this.currentQuestionId$ = this.store.select<any>(fromQuestionsSelectors.getQuestionsCurrentQuestionId);
    this.subscription = this.currentQuestionId$.subscribe(
      questionId => this.currentQuestionId = questionId
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  nextQuestion(): void {
    this.store.dispatch(fromRouterActions.ActGoToNextQuestion({
      payload: {
        path: [`/question/${this.currentQuestionId}`],
        query: {},
        extras: {},
      }
    }));
    this.store.dispatch(new fromQuestionsActions.ActIncrementQuestionId());
  }

  showAnswer(): void {
    console.log('showAnswer');
  }
}

