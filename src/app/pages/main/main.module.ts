import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import {
  HeaderModule,
  FooterModule,
  PyramidModule,
  QuestionModule,
  ButtonModule,
} from '@app/components/index';
import {
  SvgCircleGainModule,
} from '@app/components/svgs/index';
import { MainRouterModule } from './main-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ButtonModule,
    HeaderModule,
    FooterModule,
    PyramidModule,
    QuestionModule,
    SvgCircleGainModule,
    MainRouterModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
