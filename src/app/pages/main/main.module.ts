import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import {
  HeaderModule,
  FooterModule,
  PyramidModule
} from '@app/components/index';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    PyramidModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
