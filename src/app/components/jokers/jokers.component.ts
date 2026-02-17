
import { Component, inject, OnInit } from '@angular/core';
import { QuestionEntity } from '@app/models/question-entity';
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

  public usedJokerFifty = this.questionsStore.jokerFiftyUsed();
  public usedJokerCall = this.questionsStore.jokerCallUsed();
  public usedJokerPublic = this.questionsStore.jokerPublicUsed();
  public questionId: number = 0;
  public questionsEntity: QuestionEntity;

  constructor() {
  }

  ngOnInit(): void {
  }

  useJokerFifty(): void {
    if (this.usedJokerFifty === false) {
      this.questionsStore.ActJokerFiftyToFalse(this.questionId);
    }
  }
  useJokerCall(): void {
    if (this.usedJokerCall === false) {
      this.questionsStore.ActJokerCallToFalse();
    }
  }
  useJokerPublic(): void {
    if (this.usedJokerPublic === false) {
      this.questionsStore.ActJokerPublicToFalse();
    }
  }

  getClassFifty(): string {
    return this.usedJokerFifty === true ? 'svg-joker svg-joker-used' : 'svg-joker';
  }
  getClassCall(): string {
    return this.usedJokerCall === true ? 'svg-joker svg-joker-used' : 'svg-joker';
  }
  getClassPublic(): string {
    return this.usedJokerPublic === true ? 'svg-joker svg-joker-used' : 'svg-joker';
  }
}