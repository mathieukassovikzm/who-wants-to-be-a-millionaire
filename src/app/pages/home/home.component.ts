import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuestionModel } from '@app/models/question-model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/store/index';
import * as fromInfosAppSelectors from '@app/store/selectors/infos-app.selectors';
import * as fromQuestionsSelectors from '@app/store/selectors/question.selectors';
import * as fromQuestionsActions from '@app/store/actions/questions.actions';
import * as fromRouterActions from '@app/store/actions/router.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  title$: Observable<string> = new Observable<string>();
  birthday$: Observable<number> = new Observable<number>();

  questions$: Observable<QuestionModel[]>;
  subscription: Subscription;

  constructor(public store: Store<fromStore.AppState>, private router: Router, private route: ActivatedRoute) {
    this.title$ = this.store.select<any>(fromInfosAppSelectors.getInfosAppTitle);
    this.birthday$ = this.store.select<any>(fromInfosAppSelectors.getInfosAppCurrentYear);
  }

  ngOnInit(): void {
    this.store.dispatch(new fromQuestionsActions.ActLoadQuestions());
  }

  startGame(): void {
    const currentQuestion$ = this.store.select<any>(fromQuestionsSelectors.getQuestionsCurrentQuestionId);

    this.subscription = currentQuestion$.subscribe(questionId => {
      this.store.dispatch(fromRouterActions.ActGoToNextQuestion({
        payload: {
          path: [`/question/${questionId}`],
          query: {},
          extras: { queryParams: questionId },
        }
      }
      ));
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
