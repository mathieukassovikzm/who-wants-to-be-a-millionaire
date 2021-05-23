import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

/* Enum les types d'actions possibles*/
export enum RouterActionTypes {
  NAVIGATE = '[Router] Navigate',
}

export const ActRouterNavigation = createAction(
  RouterActionTypes.NAVIGATE,
  props<{ payload: { path: any[]; query?: object; extras?: NavigationExtras } }>()
);