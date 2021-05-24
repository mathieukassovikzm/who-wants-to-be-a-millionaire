import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map } from 'rxjs/operators';
import * as RouterActions from '../actions/router.actions';

@Injectable()

export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location) {
  }

  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.ActRouterNavigation),
        map((action) => action.payload),
        tap(({ path, queryParams: queryParams }) => {
          this.router.navigate(path, queryParams);
        }),
      ),
    { dispatch: false },
  );
}
