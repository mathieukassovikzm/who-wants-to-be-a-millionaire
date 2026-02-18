import { Injectable } from '@angular/core';
import { Howl } from 'howler';


@Injectable({
  providedIn: 'root'
})
export class AudioService {
  
  public play(sound: Howl): void {
    if (sound !== undefined) {
      this.unload(sound);
      sound.play();
    }
  }

  public pause(sound: Howl): void {
    if (sound !== undefined) {
      sound.pause();
    }
  }

  public unload(sound: Howl): void {
    if (sound !== undefined) {
      sound.unload();
    }
  }
}
