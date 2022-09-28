import { Action } from '@ngrx/store';
import { InfosAppActionTypes, InfosAppActions } from '../actions/infos-app.actions';

export interface InfosAppState {
  menuOpened: boolean;
}

// Initial state of the store
const initialState: InfosAppState = {
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

export const getInfosAppMenuOpened = (state: InfosAppState) => state.menuOpened;
