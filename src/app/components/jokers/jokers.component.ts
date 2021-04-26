import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/store/index';
import {
  SvgJokerCallModule,
  SvgJokerFiftyModule,
  SvgJokerPublicModule
} from '@app/components/svgs/index';
import * as fromQuestionsSelectors from '@app/store/selectors/question.selectors';
import * as fromQuestionsActions from '@app/store/actions/questions.actions';

@Component({
  selector: 'app-jokers',
  templateUrl: './jokers.component.html',
  styleUrls: ['./jokers.component.scss'],
})
export class JokersComponent implements OnInit, OnDestroy {
  usedJokerFifty$: Observable<boolean> = new Observable<boolean>();
  usedJokerFifty: boolean = false;
  usedJokerCall$: Observable<boolean> = new Observable<boolean>();
  usedJokerCall: boolean = false;
  usedJokerPublic$: Observable<boolean> = new Observable<boolean>();
  usedJokerPublic: boolean = false;

  subscription: Subscription = new Subscription();

  constructor(public store: Store<fromStore.AppState>) {
    this.usedJokerFifty$ = this.store.select<any>(fromQuestionsSelectors.getQuestionsJokerFiftyUsed);
    this.usedJokerCall$ = this.store.select<any>(fromQuestionsSelectors.getQuestionsJokerCallUsed);
    this.usedJokerPublic$ = this.store.select<any>(fromQuestionsSelectors.getQuestionsJokerPublicUsed);
  }

  ngOnInit(): void {
    var sub1 = this.usedJokerFifty$.subscribe(
      res => this.usedJokerFifty = res
    );
    var sub2 = this.usedJokerCall$.subscribe(
      res => this.usedJokerCall = res
    );
    var sub3 = this.usedJokerPublic$.subscribe(
      res => this.usedJokerPublic = res
    );
    this.subscription.add(sub1);
    this.subscription.add(sub2);
    this.subscription.add(sub3);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  useJokerFifty(): void {
    this.store.dispatch(new fromQuestionsActions.ActJokerFiftyToFalse());
  }
  useJokerCall(): void {
    this.store.dispatch(new fromQuestionsActions.ActJokerCallToFalse());
  }
  useJokerPublic(): void {
    this.store.dispatch(new fromQuestionsActions.ActJokerPublicToFalse());
  }

  getClassFifty(): string {
    return this.usedJokerFifty === true ? 'svg-joker svg-joker-used' : 'svg-joker';
  }
  getClassCall(): string {
    return this.usedJokerCall === true ? 'svg-joker svg-joker-used' : 'svg-joker';
  }
  getClassPublic(): string {
    return this.usedJokerPublic === true ? 'svg-joker svg-joker-used' : 'svg-joker';
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
