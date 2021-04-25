import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { QuestionModel } from '@app/models/question-model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/store/index';
import * as fromInfosAppSelectors from '@app/store/selectors/infos-app.selectors';
import * as fromQuestions from '@app/store/selectors/question.selectors';
import * as fromQuestionsActions from '@app/store/actions/questions.actions';
import {
  SvgQuestionModule
} from '@app/components/svgs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor(public store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    SvgQuestionModule
  ],
  exports: [QuestionComponent]
})
export class QuestionModule { }