import { computed, inject } from '@angular/core';
import { TypeSound } from '@app/models/enum-type-sound';
import { AudioService } from '@app/services/audio.service';
import { environment } from '@environments/environment';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Howl } from 'howler';

const sounds = {
  Theme: {
    sound: new Howl({
      src: ['./../../../assets/musics/Theme.mp3'],
      html5: true,
      onplay(): void {
        if (!environment.production)
          console.log('Theme Start!');
      }
    })
  },
  ExplainKnockoutGame: {
    sound: new Howl({
      src: ['./../../../assets/musics/ExplainKnockoutGame.mp3'],
      html5: true,
      onplay(): void {
        if (!environment.production)
          console.log('ExplainKnockoutGame Start!');
      }
    })
  },
  FastestFingerFirstOrderReveal: {
    sound: new Howl({
      src: ['./../../../assets/musics/FastestFingerFirstOrderReveal.mp3'],
      html5: true,
      onplay(): void {
        if (!environment.production)
          console.log('FastestFingerFirstOrderReveal Start!');
      }
    })
  },
  First5Questions: {
    sound: new Howl({
      src: ['./../../../assets/musics/First5Questions.mp3'],
      html5: true,
      onplay(): void {
        if (!environment.production)
          console.log('First5Questions Start!');
      }
    })
  },
  QuestionLose: {
    sound: new Howl({
      src: ['./../../../assets/musics/QuestionLose.mp3'],
      html5: true,
      onplay(): void {
        if (!environment.production)
          console.log('QuestionLose Start!');
      }
    })
  },
  QuestionLose2: {
    sound: new Howl({
      src: ['./../../../assets/musics/QuestionLose2.mp3'],
      html5: true,
      onplay(): void {
        if (!environment.production)
          console.log('QuestionLose2 Start!');
      }
    })
  },
  QuestionPicked: {
    sound: new Howl({
      src: ['./../../../assets/musics/QuestionPicked.mp3'],
      html5: true,
      onplay(): void {
        if (!environment.production)
          console.log('QuestionPicked Start!');
      }
    })
  },
  QuestionSuspense: {
    sound: new Howl({
      src: ['./../../../assets/musics/QuestionSuspense.mp3'],
      html5: true,
      onplay(): void {
        if (!environment.production)
          console.log('QuestionSuspense Start!');
      }
    })
  },
  QuestionSuspense2: {
    sound: new Howl({
      src: ['./../../../assets/musics/QuestionSuspense2.mp3'],
      html5: true,
      onplay(): void {
        if (!environment.production)
          console.log('QuestionSuspense2 Start!');
      }
    })
  },
  QuestionWin: {
    sound: new Howl({
      src: ['./../../../assets/musics/QuestionWin.mp3'],
      html5: true,
      onplay(): void {
        if (!environment.production)
          console.log('QuestionWin Start!');
      }
    })
  },
};

type AudioState = {
  previousSound: TypeSound | undefined;
  currentSound: TypeSound | undefined;
  isMute: boolean;
};

const initialState: AudioState = {
  previousSound: undefined,
  currentSound: undefined,
  isMute: false,
};

export const AudioStore = signalStore(
  { providedIn: 'root' },
  withState<AudioState>(initialState),
  withComputed((
    store,
    audioService = inject(AudioService)
  ) => ({
    play: computed(() => {
      const currentSound = store.currentSound();
      const previousSound = store.previousSound();
      const isMute = store.isMute();

      if (previousSound !== undefined) {
        audioService.unload(sounds[TypeSound[previousSound]].sound);
      }

      if (currentSound !== undefined) {
        if (!isMute) {
          audioService.play(sounds[TypeSound[currentSound]].sound);
        } else {
          audioService.pause(sounds[TypeSound[currentSound]].sound);
        }
      }
    }),

  })),
  withMethods((
    store,
    audioService = inject(AudioService)
  ) => ({
    picCurrentSound(song: TypeSound): void {
      if (song !== undefined) {
        patchState(store, {
          previousSound: store.currentSound(),
          currentSound: song
        });
        this.play();
      } else {
        if (!environment.production) {
          console.log('No sound to play');
        }
      }
    },

    pause(): void {
      const currentSound = store.currentSound();
      if (currentSound !== undefined) {
        audioService.pause(sounds[TypeSound[currentSound]].sound);
      }
    },

    setSound(isMute: boolean): void {
      const hasMuted = store.isMute();

      if (hasMuted === isMute) {
        return;
      }

      patchState(store, {
        isMute: isMute
      });

      if (isMute) {
        this.pause();
      } else {
        this.play();
      }
    },
  }))
);