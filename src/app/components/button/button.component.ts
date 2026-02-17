
import { Component, OnInit } from '@angular/core';
import { SvgGainComponent } from '../svgs/svg-gain/svg-gain.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [
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
