import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/store/index';
import * as fromQuestionsActions from '@app/store/actions/questions.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new fromQuestionsActions.ActLoadQuestions());
  }

}
