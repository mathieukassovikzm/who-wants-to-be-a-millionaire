import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SvgGainComponent } from '../svgs/svg-gain/svg-gain.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [
    CommonModule,
    SvgGainComponent
  ],
  standalone: true
})
export class ButtonComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
