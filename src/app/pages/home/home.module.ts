import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {
  ButtonModule
} from '@app/components/index';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
