import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {
  ButtonModule
} from '@app/components/index';
import { HomeRouterModule } from './home-routing.module';
import { AudioModule } from '@app/components/audio/audio.component';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ButtonModule,
    // AudioModule,
    HomeRouterModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
