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
  currentQuestionId$: Observable<number>;
  currentQuestionId: number;
  subscription: Subscription;

  constructor(public store: Store<fromStore.AppState>) {
    this.questions$ = this.store.select<any>(fromQuestions.getAllQuestionsReverse);
    this.currentQuestionId$ = this.store.select<any>(fromQuestionsSelectors.getQuestionsCurrentQuestionId);
    this.subscription = this.currentQuestionId$.subscribe(
      questionId => this.currentQuestionId = questionId
    );
  }

  ngOnInit(): void { }
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
