import { Component, OnInit } from '@angular/core';
import { AudioService } from '@app/services/audio.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
  standalone: true
})
export class AudioComponent implements OnInit {
  constructor(public audioService: AudioService) {
  }
  ngOnInit() {
  }
  play(): void {
    this.audioService.play();
  }
  pause(): void {
    this.audioService.pause();
  }
}