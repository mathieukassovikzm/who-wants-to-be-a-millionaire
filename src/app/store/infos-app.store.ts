import { computed, inject } from '@angular/core';
import { DatasService } from '@app/services/datas.service';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

type InfosAppState = {
  menuOpened: boolean;
};

const initialState: InfosAppState = {
  menuOpened: false
};

export const InfosAppStore = signalStore(
  { providedIn: 'root' },
  withState<InfosAppState>(initialState),
  withComputed((store, datasService = inject(DatasService)) => ({
    getTitle: computed(() => {
      return datasService.getTitleFromServeur();
    }),
    getAge: computed(() => {
      return datasService.getAgeFromServeur();
    }),
    getTxtFin: computed(() => {
      return datasService.getTxtFinFromServeur();
    }),
  })),
  withMethods((store) => ({
    ActIfsToggleMenuOpened(): void {
      patchState(store, {
        menuOpened: !store.menuOpened()
      });
    },
    ActIfsSetMenuOpened(payload: boolean): void {
      patchState(store, {
        menuOpened: payload
      });
    },
  }))
);