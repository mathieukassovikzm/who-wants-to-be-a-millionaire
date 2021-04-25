import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-joker-call',
  templateUrl: './svg-joker-call.component.html',
  styleUrls: ['./svg-joker-call.component.scss']
})
export class SvgJokerCallComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}

@NgModule({
  imports: [CommonModule],
  declarations: [SvgJokerCallComponent],
  exports: [SvgJokerCallComponent]
})
export class SvgJokerCallModule { }