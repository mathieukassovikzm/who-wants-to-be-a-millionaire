import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-gain',
  templateUrl: './svg-gain.component.html',
  styleUrls: ['./svg-gain.component.scss']
})
export class SvgGainComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}

@NgModule({
  declarations: [SvgGainComponent],
  imports: [CommonModule],
  exports: [SvgGainComponent]
})
export class SvgGainModule { }