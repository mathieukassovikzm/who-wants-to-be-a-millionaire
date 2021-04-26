import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import {
  HeaderModule,
  FooterModule,
  PyramidModule,
  QuestionModule,
  ButtonModule,
  JokersModule
} from '@app/components/index';

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
    JokersModule,
    MainRouterModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
