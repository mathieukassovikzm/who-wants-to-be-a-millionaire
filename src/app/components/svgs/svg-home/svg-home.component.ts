import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-home',
  templateUrl: './svg-home.component.html',
  styleUrls: ['./svg-home.component.scss']
})
export class SvgHomeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}

@NgModule({
  imports: [CommonModule],
  declarations: [SvgHomeComponent],
  exports: [SvgHomeComponent]
})
export class SvgHomeModule { }