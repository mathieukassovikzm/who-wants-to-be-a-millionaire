import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionModel } from '@app/models/question-model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { } from '@ngrx/router-store';

import * as fromStore from '@app/store/index';
import * as fromQuestionsActions from '@app/store/actions/questions.actions';
import * as fromRouterActions from '@app/store/actions/router.actions';
import * as fromQuestionsSelectors from '@app/store/selectors/question.selectors';
import * as fromInfosAppSelectors from '@app/store/selectors/infos-app.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  title$: Observable<string> = new Observable<string>();
  birthday$: Observable<number> = new Observable<number>();
  menuOpened$: Observable<boolean> = new Observable<boolean>();
  menuOpened = false;

  questions$: Observable<QuestionModel[]>;
  currentQuestion$: Observable<QuestionModel>;
  currentQuestionId: number;
  currentAnswer$: Observable<number>;
  currentAnswer = -1;
  showAnswer$: Observable<boolean>;
  showAnswer = false;
  subscription: Subscription = new Subscription();

  constructor(public store: Store<fromStore.AppState>, private router: Router) {
  }

  ngOnInit(): void {
    this.title$ = this.store.select<any>(fromInfosAppSelectors.getInfosAppTitle);
    this.birthday$ = this.store.select<any>(fromInfosAppSelectors.getInfosAppCurrentYear);

    this.currentQuestion$ = this.store.select<any>(fromQuestionsSelectors.getCurrentQuestion);
    const sub1 = this.currentQuestion$.subscribe(
      question => {
        if (question) {
          this.currentQuestionId = question.id
        }
      }
    );

    this.menuOpened$ = this.store.select<any>(fromInfosAppSelectors.getInfosAppMenuOpened);
    const sub2 = this.menuOpened$.subscribe(
      res => this.menuOpened = res
    );

    this.showAnswer$ = this.store.select<boolean>(fromQuestionsSelectors.getQuestionsDisplayAnswer);
    const sub3 = this.showAnswer$.subscribe(
      res => this.showAnswer = res
    );

    this.currentAnswer$ = this.store.select<number>(fromQuestionsSelectors.getQuestionsAnswerChosen);
    const sub4 = this.currentAnswer$.subscribe(
      res => this.currentAnswer = res
    );

    this.subscription.add(sub1);
    this.subscription.add(sub2);
    this.subscription.add(sub3);
    this.subscription.add(sub4);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getMainClass(): string {
    return this.menuOpened ? 'main-section opened' : 'main-section';
  }

  nextQuestion(): void {
    if (this.showAnswer === true) {
      this.store.dispatch(new fromStore.ActResetAnswerChosen);
      this.store.dispatch(new fromStore.ActHideAnswer);
      this.store.dispatch(fromRouterActions.ActGoToNextQuestion({
        payload: {
          path: [`/question/${this.currentQuestionId + 1}`],
          query: {},
          extras: {},
        }
      }));
    }
  }

  displayAnswer(): void {
    if (this.currentAnswer !== -1) {
      this.store.dispatch(new fromStore.ActDisplayAnswer);
    }
  }
}

