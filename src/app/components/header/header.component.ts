import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/store/index';
import * as fromRouterActions from '@app/store/actions/router.actions';

import {
  JokersModule,
} from '@app/components/jokers/jokers.component';

import {
  SvgEuroModule,
  SvgHomeModule
} from '@app/components/svgs/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public store: Store<fromStore.AppState>) { }
  ngOnInit(): void { }

  goToHome(): void {
    this.store.dispatch(fromRouterActions.ActGoToNextQuestion({
      payload: {
        path: [`/home`],
        query: {},
        extras: {},
      }
    }
    ));
  }
}

@NgModule({
  imports: [
    CommonModule,
    JokersModule,
    SvgEuroModule,
    SvgHomeModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }