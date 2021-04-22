import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-question',
  templateUrl: './svg-question.component.html',
  styleUrls: ['./svg-question.component.scss']
})
export class SvgQuestionComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}

@NgModule({
  declarations: [SvgQuestionComponent],
  imports: [CommonModule],
  exports: [SvgQuestionComponent]
})
export class SvgQuestionModule { }