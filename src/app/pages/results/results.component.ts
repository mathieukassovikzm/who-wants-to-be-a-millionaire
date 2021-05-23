import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/store/index';
import * as fromInfosAppSelectors from '@app/store/selectors/infos-app.selectors';
import * as fromQuestionsSelectors from '@app/store/selectors/question.selectors';
import { Observable, Subscription } from 'rxjs';
import { QuestionModel } from '@app/models/question-model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {
  title$: Observable<string> = new Observable<string>();
  birthday$: Observable<string> = new Observable<string>();

  lstGoodAnswers$: Observable<QuestionModel[]>;
  lstGoodAnswers: QuestionModel[];
  nbGoodAnswers: number = 0;
  nbGains: number = 0;
  subscription: Subscription = new Subscription();

  limitEX: number = 15;
  limitTB: number = 12;
  limitBN: number = 9;
  limitPM: number = 6;
  constructor(public store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.title$ = this.store.select<string>(fromInfosAppSelectors.getInfosAppTitle);
    this.birthday$ = this.store.select<string>(fromInfosAppSelectors.getInfosAppCurrentYear);

    this.lstGoodAnswers$ = this.store.select<any>(fromQuestionsSelectors.getAllGoodAnsweredQuestions);
    const sub1 = this.lstGoodAnswers$.subscribe(
      lst => {
        this.lstGoodAnswers = lst;


        if (this.lstGoodAnswers && this.lstGoodAnswers.length > 0) {
          this.nbGoodAnswers = this.lstGoodAnswers.length;
          this.lstGoodAnswers.forEach(goodAnswer => {
            this.nbGains = this.nbGains + goodAnswer.gain
          });
        }
      }
    );
    this.subscription.add(sub1);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  isResultEx(): boolean {
    return this.nbGoodAnswers === this.limitEX ? true : false;
  }
  isResultTB(): boolean {
    return (this.limitTB <= this.nbGoodAnswers) && (this.nbGoodAnswers < this.limitEX) ? true : false;
  }
  isResultBN(): boolean {
    return (this.limitBN <= this.nbGoodAnswers) && (this.nbGoodAnswers < this.limitTB) ? true : false;
  }
  isResultPM(): boolean {
    return (this.limitPM <= this.nbGoodAnswers) && (this.nbGoodAnswers < this.limitBN) ? true : false;
  }
  isResultNU(): boolean {
    return this.nbGoodAnswers < this.limitPM ? true : false;
  }
}
