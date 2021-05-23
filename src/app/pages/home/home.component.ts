import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuestionModel } from '@app/models/question-model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/store/index';
import * as fromInfosAppSelectors from '@app/store/selectors/infos-app.selectors';
import * as fromQuestionsSelectors from '@app/store/selectors/question.selectors';
import * as fromRouterActions from '@app/store/actions/router.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  title$: Observable<string> = new Observable<string>();
  birthday$: Observable<string> = new Observable<string>();

  question$: Observable<QuestionModel>;
  questionId = -1;
  subscription: Subscription;

  constructor(public store: Store<fromStore.AppState>, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.title$ = this.store.select<string>(fromInfosAppSelectors.getInfosAppTitle);
    this.birthday$ = this.store.select<string>(fromInfosAppSelectors.getInfosAppCurrentYear);
    this.question$ = this.store.select<QuestionModel>(fromQuestionsSelectors.getCurrentQuestion);
  }

  startGame(): void {
    this.subscription = this.question$.subscribe(question => {
      if (question) {
        this.questionId = question.id
      }
    });

    if (this.questionId === -1) {
      this.store.dispatch(fromRouterActions.ActRouterNavigation({
        payload: {
          path: [`/question/0`],
          query: {},
        }
      }));
    } else {
      this.store.dispatch(fromRouterActions.ActRouterNavigation({
        payload: {
          path: [`/question/${this.questionId}`],
          query: {},
        }
      }));
    }

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
