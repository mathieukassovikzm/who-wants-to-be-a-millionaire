import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {
  SvgGainModule
} from '@app/components/svgs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

@NgModule({
  imports: [
    CommonModule,
    SvgGainModule
  ],
  exports: [ButtonComponent],
  declarations: [ButtonComponent]
})
export class ButtonModule { }
