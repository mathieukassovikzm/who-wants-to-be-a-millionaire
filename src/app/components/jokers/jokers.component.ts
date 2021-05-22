import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/store/index';
import {
  SvgJokerCallModule,
  SvgJokerFiftyModule,
  SvgJokerPublicModule
} from '@app/components/svgs/index';
import * as fromQuestionsSelectors from '@app/store/selectors/question.selectors';
import * as fromQuestionsActions from '@app/store/actions/questions.actions';
import { QuestionModel } from '@app/models/question-model';
import { AnswerModel } from '@app/models/answer-model';
import { QuestionEntity } from '@app/models/question-entity';

@Component({
  selector: 'app-jokers',
  templateUrl: './jokers.component.html',
  styleUrls: ['./jokers.component.scss'],
})
export class JokersComponent implements OnInit, OnDestroy {
  usedJokerFifty$: Observable<boolean> = new Observable<boolean>();
  usedJokerFifty: boolean = false;
  usedJokerCall$: Observable<boolean> = new Observable<boolean>();
  usedJokerCall: boolean = false;
  usedJokerPublic$: Observable<boolean> = new Observable<boolean>();
  usedJokerPublic: boolean = false;
  questionId$: Observable<number> = new Observable<number>();
  questionId: number = 0;
  questionsEntity$: Observable<QuestionEntity> = new Observable<QuestionEntity>();
  questionsEntity: QuestionEntity;
  subscription: Subscription = new Subscription();

  constructor(public store: Store<fromStore.AppState>) {
    this.usedJokerFifty$ = this.store.select<boolean>(fromQuestionsSelectors.getQuestionsJokerFiftyUsed);
    this.usedJokerCall$ = this.store.select<boolean>(fromQuestionsSelectors.getQuestionsJokerCallUsed);
    this.usedJokerPublic$ = this.store.select<boolean>(fromQuestionsSelectors.getQuestionsJokerPublicUsed);
    this.questionId$ = this.store.select<number>(fromQuestionsSelectors.getQuestionId);
    this.questionsEntity$ = this.store.select<QuestionEntity>(fromQuestionsSelectors.getQuestionsEntities);
  }

  ngOnInit(): void {
    var sub1 = this.usedJokerFifty$.subscribe(res => this.usedJokerFifty = res);
    var sub2 = this.usedJokerCall$.subscribe(res => this.usedJokerCall = res);
    var sub3 = this.usedJokerPublic$.subscribe(res => this.usedJokerPublic = res);
    var sub4 = this.questionId$.subscribe(res => this.questionId = res);
    var sub5 = this.questionsEntity$.subscribe(res => this.questionsEntity = res);

    this.subscription.add(sub1);
    this.subscription.add(sub2);
    this.subscription.add(sub3);
    this.subscription.add(sub4);
    this.subscription.add(sub5);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  useJokerFifty(): void {
    if (this.usedJokerFifty === false) {
      this.store.dispatch(new fromQuestionsActions.ActJokerFiftyToFalse(this.questionId));
    }
  }
  useJokerCall(): void {
    if (this.usedJokerCall === false) {
      this.store.dispatch(new fromQuestionsActions.ActJokerCallToFalse());
    }
  }
  useJokerPublic(): void {
    if (this.usedJokerPublic === false) {
      this.store.dispatch(new fromQuestionsActions.ActJokerPublicToFalse());
    }
  }

  getClassFifty(): string {
    return this.usedJokerFifty === true ? 'svg-joker svg-joker-used' : 'svg-joker';
  }
  getClassCall(): string {
    return this.usedJokerCall === true ? 'svg-joker svg-joker-used' : 'svg-joker';
  }
  getClassPublic(): string {
    return this.usedJokerPublic === true ? 'svg-joker svg-joker-used' : 'svg-joker';
  }
}

@NgModule({
  declarations: [JokersComponent],
  imports: [
    CommonModule,
    SvgJokerCallModule,
    SvgJokerFiftyModule,
    SvgJokerPublicModule
  ],
  exports: [JokersComponent],
})
export class JokersModule { }
