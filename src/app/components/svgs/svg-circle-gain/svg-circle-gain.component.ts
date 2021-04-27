import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-circle-gain',
  templateUrl: './svg-circle-gain.component.html',
  styleUrls: ['./svg-circle-gain.component.scss']
})
export class SvgCircleGainComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}

@NgModule({
  imports: [CommonModule],
  declarations: [SvgCircleGainComponent],
  exports: [SvgCircleGainComponent]
})
export class SvgCircleGainModule { }
