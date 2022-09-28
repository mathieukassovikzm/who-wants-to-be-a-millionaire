import { Action } from '@ngrx/store';
import { InfosAppActionTypes, InfosAppActions } from '../actions/infos-app.actions';

export interface InfosAppState {
  title: string;
  currentYear: string;
  menuOpened: boolean;
}

// Initial state of the store
const initialState: InfosAppState = {
  title: 'Annif Thibu',
  currentYear: '33 ans',
  menuOpened: false
};

export function infosAppReducer(
  state = initialState,
  incomingAction: Action
): InfosAppState {
  const action = incomingAction as InfosAppActions;
  switch (action.type) {
    case InfosAppActionTypes.TOOGLE_MENU_OPEN:
      return {
        ...state,
        menuOpened: !state.menuOpened
      };
    case InfosAppActionTypes.SET_MENU_OPEN:
      return {
        ...state,
        menuOpened: action.payload
      };
    default:
      return state;
  }
}

export const getInfosAppTitle = (state: InfosAppState) => state.title;
export const getInfosAppCurrentYear = (state: InfosAppState) => state.currentYear;
export const getInfosAppMenuOpened = (state: InfosAppState) => state.menuOpened;
