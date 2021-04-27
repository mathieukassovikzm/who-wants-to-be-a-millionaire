import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-euro',
  templateUrl: './svg-euro.component.html',
  styleUrls: ['./svg-euro.component.scss']
})
export class SvgEuroComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}

@NgModule({
  imports: [CommonModule],
  declarations: [SvgEuroComponent],
  exports: [SvgEuroComponent]
})
export class SvgEuroModule { }