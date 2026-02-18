
import { Component, inject, OnInit } from '@angular/core';
import { JokersComponent } from '../jokers/jokers.component';
import { SvgEuroComponent } from '../svgs/svg-euro/svg-euro.component';
import { SvgHomeComponent } from '../svgs/svg-home/svg-home.component';
import { InfosAppStore } from '@app/store/infos-app.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [SvgEuroComponent, SvgHomeComponent, JokersComponent],
  standalone: true
})
export class HeaderComponent implements OnInit {
  readonly infosAppStore = inject(InfosAppStore);
   readonly router = inject(Router);

  constructor() { }
  ngOnInit(): void { }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  togglePyramid(): void {
    this.infosAppStore.ActIfsToggleMenuOpened();
  }
}
