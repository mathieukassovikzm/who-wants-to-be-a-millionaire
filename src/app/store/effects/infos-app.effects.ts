import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, withLatestFrom, filter } from 'rxjs/operators';
import { AppState } from '@app/store/reducers';
// import * as incidentActions from 'app/store/actions/incident.actions';
// import { IncidentService } from '@services/incident.service';

@Injectable()

export class InfosAppEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>) {
  }

  // ActIcdGetIncidentByTtinum$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType<incidentActions.ActIcdGetIncidentByTtinum>(incidentActions.IncidentActionTypes.LOAD_INCIDENT_BY_TTINUM),
  //     switchMap(action =>
  //       this.incidentService.getIncidentFromServer(action.payload)
  //         .pipe(
  //           map(icd => new incidentActions.ActIcdLoadIncidentSuccess(icd)),
  //           catchError(error => of(new incidentActions.ActIcdLoadIncidentError(error)))
  //         ))
  //   );
  // });
}
