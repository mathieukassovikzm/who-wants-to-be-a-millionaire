import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-joker-public',
  templateUrl: './svg-joker-public.component.html',
  styleUrls: ['./svg-joker-public.component.scss']
})
export class SvgJokerPublicComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}

@NgModule({
  imports: [CommonModule],
  declarations: [SvgJokerPublicComponent],
  exports: [SvgJokerPublicComponent]
})
export class SvgJokerPublicModule { }