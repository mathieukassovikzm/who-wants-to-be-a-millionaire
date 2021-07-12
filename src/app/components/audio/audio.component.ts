import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '@app/services/audio.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {
  constructor(public audioService: AudioService) {
  }
  ngOnInit() {
  }
  play():void{
    this.audioService.play();
  }
  pause():void{
    this.audioService.pause();
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