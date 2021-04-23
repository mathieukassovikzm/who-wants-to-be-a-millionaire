import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {
  ButtonModule
} from '@app/components/index';
import { HomeRouterModule } from './home-routing.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ButtonModule,
    HomeRouterModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
