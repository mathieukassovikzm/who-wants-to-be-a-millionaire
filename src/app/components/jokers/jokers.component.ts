
import { Component, inject, OnInit } from '@angular/core';
import { InfosAppStore } from '@app/store/infos-app.store';
import { QuestionsStore } from '@app/store/question.store';
import { SvgJokerCallComponent } from '../svgs/svg-joker-call/svg-joker-call.component';
import { SvgJokerFiftyComponent } from '../svgs/svg-joker-fifty/svg-joker-fifty.component';
import { SvgJokerPublicComponent } from '../svgs/svg-joker-public/svg-joker-public.component';

const svgs = [
  SvgJokerCallComponent,
  SvgJokerFiftyComponent,
  SvgJokerPublicComponent
];

@Component({
  selector: 'app-jokers',
  templateUrl: './jokers.component.html',
  styleUrls: ['./jokers.component.scss'],
  imports: [
    ...svgs
],
  standalone: true
})
export class JokersComponent implements OnInit {
  readonly questionsStore = inject(QuestionsStore);
  readonly infosAppStore = inject(InfosAppStore);

  public sUsedJokerFifty = this.questionsStore.jokerFiftyUsed;
  public sUsedJokerCall = this.questionsStore.jokerCallUsed;
  public sUsedJokerPublic = this.questionsStore.jokerPublicUsed;

  constructor() {
  }

  ngOnInit(): void {
  }

  useJokerFifty(): void {
    if (this.sUsedJokerFifty() === false) {
      this.questionsStore.ActJokerFiftyToFalse();
    }
  }
  useJokerCall(): void {
    if (this.sUsedJokerCall() === false) {
      this.questionsStore.ActJokerCallToFalse();
    }
  }
  useJokerPublic(): void {
    if (this.sUsedJokerPublic() === false) {
      this.questionsStore.ActJokerPublicToFalse();
    }
  }

  getClassFifty(): string {
    return this.sUsedJokerFifty() === true ? 'svg-joker svg-joker-used' : 'svg-joker';
  }
  getClassCall(): string {
    return this.sUsedJokerCall() === true ? 'svg-joker svg-joker-used' : 'svg-joker';
  }
  getClassPublic(): string {
    return this.sUsedJokerPublic() === true ? 'svg-joker svg-joker-used' : 'svg-joker';
  }
}