import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';
import { PyramidComponent } from '@app/components/pyramid/pyramid.component';
import { QuestionModel } from '@app/models/question-model';
import { InfosAppStore } from '@app/store/infos-app.store';
import { QuestionsStore } from '@app/store/question.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  imports: [
    CommonModule,
    PyramidComponent,
  ],
  standalone: true
})
export class ResultsComponent implements OnInit {
  readonly infosAppStore = inject(InfosAppStore);
  readonly questionsStore = inject(QuestionsStore);

  public title = this.infosAppStore.getTitle();
  public birthday = this.infosAppStore.getAge();
  public txtFin = this.infosAppStore.getTxtFin();

  nbGoodAnswers: number = 0;
  nbGains: number = 0;
  limitEX: number = 15;
  limitTB: number = 12;
  limitBN: number = 9;
  limitPM: number = 6;

  constructor(  ) {
    effect(() => {
      const lstGoodAnswers = this.questionsStore.getAllGoodAnsweredQuestions();
      if (lstGoodAnswers && lstGoodAnswers.length > 0) {
        this.nbGoodAnswers = lstGoodAnswers.length;
        this.nbGains = 0;
        lstGoodAnswers.forEach(goodAnswer => {
          this.nbGains = this.nbGains + goodAnswer.gain
        });
      }
    });
  }

  ngOnInit() {
  }

  isResultEx(): boolean {
    return this.nbGoodAnswers === this.limitEX ? true : false;
  }
  isResultTB(): boolean {
    return (this.limitTB <= this.nbGoodAnswers) && (this.nbGoodAnswers < this.limitEX) ? true : false;
  }
  isResultBN(): boolean {
    return (this.limitBN <= this.nbGoodAnswers) && (this.nbGoodAnswers < this.limitTB) ? true : false;
  }
  isResultPM(): boolean {
    return (this.limitPM <= this.nbGoodAnswers) && (this.nbGoodAnswers < this.limitBN) ? true : false;
  }
  isResultNU(): boolean {
    return this.nbGoodAnswers < this.limitPM ? true : false;
  }
}
