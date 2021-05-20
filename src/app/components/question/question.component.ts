import { CommonModule } from '@angular/common';
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { QuestionModel } from '@app/models/question-model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/store/index';
import * as fromQuestionsSelectors from '@app/store/selectors/question.selectors';
import {
  SvgGainModule,
  SvgLosangeModule
} from '@app/components/svgs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {
  currentQuestion$: Observable<QuestionModel>;
  currentQuestion: QuestionModel;
  currentAnswer$: Observable<number>;
  currentAnswer = -1;
  showAnswer$: Observable<boolean>;
  showAnswer = false;
  jokerFiftyUsed$: Observable<boolean>;
  jokerFiftyUsed = false;
  subscription: Subscription = new Subscription();

  constructor(public store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
    this.currentQuestion$ = this.store.select<QuestionModel>(fromQuestionsSelectors.getCurrentQuestion);
    const sub1 = this.currentQuestion$.subscribe(res => this.currentQuestion = res);

    this.currentAnswer$ = this.store.select<number>(fromQuestionsSelectors.getQuestionsAnswerChosen);
    const sub2 = this.currentAnswer$.subscribe(res => this.currentAnswer = res);

    this.showAnswer$ = this.store.select<boolean>(fromQuestionsSelectors.getQuestionsDisplayAnswer);
    const sub3 = this.showAnswer$.subscribe(res => this.showAnswer = res);

    this.subscription.add(sub1);
    this.subscription.add(sub2);
    this.subscription.add(sub3);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  selectAnswer(answerId: number): void {
    this.store.dispatch(new fromStore.ActSetAnswerChosen(answerId))
  }

  getClassAnswers(answerId): string {
    if (this.showAnswer === false && this.currentAnswer === answerId) {
      return 'answer answer-candidate';
    } else if (this.showAnswer === false && this.currentAnswer !== answerId) {
      return 'answer';
    } else if (this.showAnswer === true && this.currentQuestion.goodAnswer === answerId) {
      return 'answer answer-good';
    } else if (this.showAnswer === true && this.currentAnswer === answerId && this.currentAnswer !== this.currentQuestion.goodAnswer) {
      return 'answer answer-wrong';
    } else {
      return 'answer';
    }
  }
}

@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    SvgGainModule,
    SvgLosangeModule
  ],
  exports: [QuestionComponent]
})
export class QuestionModule { }