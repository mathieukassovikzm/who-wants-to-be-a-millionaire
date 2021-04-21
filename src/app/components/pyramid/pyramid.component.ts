import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { QuestionModel } from '@app/models/question-model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/store/index';
import * as fromInfosAppSelectors from '@app/store/selectors/infos-app.selectors';
import * as fromQuestions from '@app/store/selectors/question.selectors';
import * as fromQuestionsActions from '@app/store/actions/questions.actions';

@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.scss']
})
export class PyramidComponent implements OnInit {
  questions$: Observable<QuestionModel[]>;

  constructor(public store: Store<fromStore.AppState>) {
    this.questions$ = this.store.select<any>(fromQuestions.getAllQuestions);
  }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [PyramidComponent],
  imports: [CommonModule],
  exports: [PyramidComponent]
})
export class PyramidModule { }