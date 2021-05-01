import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { QuestionModel } from '@app/models/question-model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/store/index';
import * as fromQuestionsSelectors from '@app/store/selectors/question.selectors';
import {
  SvgGainModule,
} from '@app/components/svgs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  currentQuestion$: Observable<QuestionModel>;
  currentQuestion: QuestionModel;
  subscription: Subscription = new Subscription();

  constructor(public store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
    this.currentQuestion$ = this.store.select<QuestionModel>(fromQuestionsSelectors.getCurrentQuestion);
  }
}

@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    SvgGainModule
  ],
  exports: [QuestionComponent]
})
export class QuestionModule { }