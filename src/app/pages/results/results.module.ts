import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResultsComponent } from './results.component';
import { ResultsRouterModule } from './results-routing.module';
import { PyramidModule } from '@app/components';

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    ResultsRouterModule,
    PyramidModule,
  ],
  exports: [ResultsComponent]
})
export class ResultsModule { }
