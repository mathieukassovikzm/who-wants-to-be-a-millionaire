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
  imports: [CommonModule],
  declarations: [SvgGainComponent],
  exports: [SvgGainComponent]
})
export class SvgGainModule { }
