import { createAction, props } from '@ngrx/store';
import { Params } from '@angular/router';

/* Enum les types d'actions possibles*/
export enum RouterActionTypes {
  NAVIGATE = '[Router] Navigate',
}

export const ActRouterNavigation = createAction(
  RouterActionTypes.NAVIGATE,
  props<{ payload: { path: any[]; queryParams: Params; } }>()
);