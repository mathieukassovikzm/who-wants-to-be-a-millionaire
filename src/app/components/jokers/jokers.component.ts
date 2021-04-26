import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, OnDestroy } from '@angular/core';
import { QuestionModel } from '@app/models/question-model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/store/index';
import {
  SvgJokerCallModule,
  SvgJokerFiftyModule,
  SvgJokerPublicModule
} from '@app/components/svgs/index';
import * as fromQuestionsSelectors from '@app/store/selectors/question.selectors';

@Component({
  selector: 'app-jokers',
  templateUrl: './jokers.component.html',
  styleUrls: ['./jokers.component.scss'],
})
export class JokersComponent implements OnInit, OnDestroy {

  constructor(public store: Store<fromStore.AppState>) {

  }

  ngOnInit(): void { }
  ngOnDestroy(): void {
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
