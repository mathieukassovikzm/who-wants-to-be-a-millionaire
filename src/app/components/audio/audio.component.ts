import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {
  sound = new Howl({
    src: ['./../../../assets/musics/Theme.mp3'],
    html5: true
  });

  constructor() {
 }

  ngOnInit() {
    // Play the sound.
    this.sound.play();
    // Change global volume.
    Howler.volume(1);
  }
}
@NgModule({
  declarations: [AudioComponent],
  imports: [
    CommonModule,
  ],
  exports: [AudioComponent]
})
export class AudioModule { }