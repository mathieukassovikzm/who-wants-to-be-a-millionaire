import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

/* Enum les types d'actions possibles*/
export enum RouterActionTypes {
  GO_TO_NEXT_QUESTION = '[Router] Go to next Question',
}

export const ActGoToNextQuestion =
  createAction(
    RouterActionTypes.GO_TO_NEXT_QUESTION,
    props<{ payload: { path: any[]; query?: object; extras?: NavigationExtras } }>());