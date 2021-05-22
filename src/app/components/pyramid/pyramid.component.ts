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
  currentQuestionId: number;
  subscription: Subscription = new Subscription();

  constructor(public store: Store<fromStore.AppState>) {
    this.questions$ = this.store.select<QuestionModel[]>(fromQuestions.getAllQuestionsReverse);
    this.currentQuestion$ = this.store.select<QuestionModel>(fromQuestionsSelectors.getCurrentQuestion);
  }

  ngOnInit(): void {
    const sub1 = this.questions$.subscribe(
      res => {
        if (res) {
          this.questions = res
        }
      }
    );

    const sub2 = this.currentQuestion$.subscribe(
      question => {
        if (question) {
          this.currentQuestionId = question.id
        }
      }
    );

    this.subscription.add(sub1);
    this.subscription.add(sub2);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getClass(index: number): string {
    if (index === this.currentQuestionId && this.isStage(index)) {
      return 'item item-active item-stage';
    }
    else if (index === this.currentQuestionId && !this.isStage(index)) {
      return 'item item-active ';
    }
    else if (index < this.currentQuestionId && this.isStage(index)) {
      return 'item item-passed item-stage';
    }
    else if (index < this.currentQuestionId && !this.isStage(index)) {
      return 'item item-passed';
    }
    else if (index > this.currentQuestionId && this.isStage(index)) {
      return 'item item-stage';
    }
    else {
      return 'item';
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

