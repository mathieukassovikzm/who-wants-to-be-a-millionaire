import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { QuestionModel } from '@app/models/question-model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/store/index';
import * as fromInfosAppSelectors from '@app/store/selectors/infos-app.selectors';
import * as fromQuestions from '@app/store/selectors/question.selectors';
import * as fromQuestionsActions from '@app/store/actions/questions.actions';
import { QuestionService } from '@app/services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  title$: Observable<string> = new Observable<string>();
  birthday$: Observable<string> = new Observable<string>();

  constructor(
    public store: Store<fromStore.AppState>,
    public questionService : QuestionService
    ) {
      this.title$ = this.questionService.getTitleFromServeur();
      this.birthday$ = this.questionService.getAgeFromServeur();
      
  }

  ngOnInit(): void { }

}

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule],
  exports: [FooterComponent]
})
export class FooterModule { }