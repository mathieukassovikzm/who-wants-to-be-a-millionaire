
import { Component, inject, OnInit } from '@angular/core';
import { InfosAppStore } from '@app/store/infos-app.store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [],
  standalone: true
})
export class FooterComponent implements OnInit {
  readonly infosAppStore = inject(InfosAppStore);

  public title = this.infosAppStore.getTitle();
  public birthday = this.infosAppStore.getAge();

  constructor() {
  }

  ngOnInit(): void { }
}
