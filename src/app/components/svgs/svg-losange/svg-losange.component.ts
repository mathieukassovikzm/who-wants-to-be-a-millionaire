import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-losange',
  templateUrl: './svg-losange.component.html',
  styleUrls: ['./svg-losange.component.scss']
})
export class SvgLosangeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}

@NgModule({
  declarations: [SvgLosangeComponent],
  imports: [CommonModule],
  exports: [SvgLosangeComponent]
})
export class SvgLosangeModule { }
