import { Action } from '@ngrx/store';

/* Enum les types d'actions possibles*/
export enum InfosAppActionTypes {
  TOOGLE_MENU_OPEN = '[InfosApp] Toggle Menu Opened',
  SET_MENU_OPEN = '[InfosApp] Set Menu Opened',
}

export class ActIfsToggleMenuOpened implements Action {
  readonly type = InfosAppActionTypes.TOOGLE_MENU_OPEN;
}

export class ActIfsSetMenuOpened implements Action {
  readonly type = InfosAppActionTypes.SET_MENU_OPEN;
  constructor(public payload: boolean) { }
}

/* Union Action: Permet de limiter les types d'actions aux actions possibles*/
export type InfosAppActions = ActIfsToggleMenuOpened
  | ActIfsSetMenuOpened;
