import { Component, inject } from '@angular/core';
import { AudioStore } from '@app/store/audio.store';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
  standalone: true
})
export class AudioComponent {

  readonly audioStore = inject(AudioStore);

  constructor() {
  }
  play(): void {
    this.audioStore.setSound(false);
  }
  pause(): void {
    this.audioStore.setSound(true);
  }
}