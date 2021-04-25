import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-joker-fifty',
  templateUrl: './svg-joker-fifty.component.html',
  styleUrls: ['./svg-joker-fifty.component.scss']
})
export class SvgJokerFiftyComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}

@NgModule({
  imports: [CommonModule],
  declarations: [SvgJokerFiftyComponent],
  exports: [SvgJokerFiftyComponent]
})
export class SvgJokerFiftyModule { }