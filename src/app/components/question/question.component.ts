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
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  title$: Observable<string> = new Observable<string>();
  birthday$: Observable<number> = new Observable<number>();

  questions$: Observable<QuestionModel[]>;

  constructor(public store: Store<fromStore.AppState>) {
    this.title$ = this.store.select<any>(fromInfosAppSelectors.getInfosAppTitle);
    this.birthday$ = this.store.select<any>(fromInfosAppSelectors.getInfosAppCurrentYear);
    this.questions$ = this.store.select<any>(fromQuestions.getAllQuestions);
  }

  ngOnInit(): void {
    this.store.dispatch(new fromQuestionsActions.ActLoadQuestions());
  }

}

@NgModule({
  declarations: [QuestionComponent],
  imports: [CommonModule],
  exports: [QuestionComponent]
})
export class QuestionModule { }