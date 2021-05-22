import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, OnDestroy } from '@angular/core';
import { QuestionModel } from '@app/models/question-model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/store/index';
import * as fromQuestions from '@app/store/selectors/question.selectors';
import { ReversePipe } from '@app/helpers';
import {
  SvgGainModule,
  SvgLosangeModule
} from '@app/components/svgs';
import * as fromQuestionsSelectors from '@app/store/selectors/question.selectors';

@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.scss'],
  providers: [ReversePipe]
})
export class PyramidComponent implements OnInit, OnDestroy {
  questions$: Observable<QuestionModel[]>;
  questions: QuestionModel[];
  currentQuestion$: Observable<QuestionModel>;
  currentQuestion: QuestionModel;
  showAnswer$: Observable<boolean>;
  showAnswer = false;
  subscription: Subscription = new Subscription();

  constructor(public store: Store<fromStore.AppState>) {
    this.questions$ = this.store.select<QuestionModel[]>(fromQuestions.getAllQuestionsReverse);
    this.currentQuestion$ = this.store.select<QuestionModel>(fromQuestionsSelectors.getCurrentQuestion);
    this.showAnswer$ = this.store.select<boolean>(fromQuestionsSelectors.getQuestionsDisplayAnswer);
  }

  ngOnInit(): void {
    const sub1 = this.questions$.subscribe(res => this.questions = res);
    const sub2 = this.currentQuestion$.subscribe(question => this.currentQuestion = question);
    const sub3 = this.showAnswer$.subscribe(res => this.showAnswer = res);

    this.subscription.add(sub1);
    this.subscription.add(sub2);
    this.subscription.add(sub3);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getClass(index: number): string {
    if (index === this.currentQuestion.id && this.isStage(index)) {
      return 'item item-active item-stage';
    }
    else if (index === this.currentQuestion.id && !this.isStage(index)) {
      return 'item item-active ';
    }
    else if (index < this.currentQuestion.id && this.isStage(index)) {
      return 'item item-passed item-stage';
    }
    else if (index < this.currentQuestion.id && !this.isStage(index)) {
      return 'item item-passed';
    }
    else if (index > this.currentQuestion.id && this.isStage(index)) {
      return 'item item-stage';
    }
    else {
      return 'item';
    }
  }
  getClassDot(index: number): string {
    const question$ = this.store.select<QuestionModel>(fromQuestions.getQuestion(index));
    let question = {} as QuestionModel;
    const subQt = question$.subscribe(res => question = res);
    this.subscription.add(subQt);

    if (question.goodAnswer === true) {
      return 'txt-dot answer-right';
    }
    else if (question.goodAnswer === false) {
      return 'txt-dot answer-wrong';
    }
    else {
      return 'txt-dot';
    }
  }




  isStage(index: number): boolean {
    if (index === 5 || index === 10 || index === 15) {
      return true;
    } else {
      return false;
    }
  }
}

@NgModule({
  declarations: [PyramidComponent],
  imports: [
    CommonModule,
    SvgGainModule,
    SvgLosangeModule
  ],
  exports: [PyramidComponent],
})
export class PyramidModule { }

