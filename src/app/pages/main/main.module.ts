import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import {
  HeaderModule,
  FooterModule,
  PyramidModule
} from '@app/components/index';
import { MainRouterModule } from './main-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    PyramidModule,
    MainRouterModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
