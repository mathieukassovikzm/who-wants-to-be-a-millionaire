import { Component, inject } from '@angular/core';
import { QuestionModel } from '@app/models/question-model';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { ButtonComponent } from '@app/components/button/button.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { PyramidComponent } from '@app/components/pyramid/pyramid.component';
import { QuestionComponent } from '@app/components/question/question.component';
import { SvgCircleGainComponent } from '@app/components/svgs/svg-circle-gain/svg-circle-gain.component';
import { InfosAppStore } from '@app/store/infos-app.store';
import { QuestionsStore } from '@app/store/question.store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    PyramidComponent,
    QuestionComponent,
    SvgCircleGainComponent
  ],
  standalone: true
})
export class MainComponent {
  readonly router = inject(Router);
  readonly infosAppStore = inject(InfosAppStore);
  readonly questionsStore = inject(QuestionsStore);

  public title = this.infosAppStore.getTitle();
  public birthday = this.infosAppStore.getAge();
  public menuOpened = this.infosAppStore.menuOpened;

  public questions: Observable<QuestionModel[]>;
  public sCurrentQuestion = this.questionsStore.getCurrentQuestion;
  public sCurrentAnswer = this.questionsStore.answerChosen;
  public sShowAnswer = this.questionsStore.displayAnswer;

  constructor() { }

  getMainClass(): string {
    return this.menuOpened() ? 'main-section opened' : 'main-section';
  }

  nextQuestion(): void {
    if (this.sShowAnswer() === true) {
      this.questionsStore.ActResetAnswerChosen();
      this.questionsStore.ActHideAnswer();
      this.router.navigate([`/question/${this.sCurrentQuestion()?.id + 1}`], {
        queryParams: {},
      });
    }
  }

  toResult(): void {
    if (this.sShowAnswer() === true) {
      this.router.navigate([`/results`], {
        queryParams: {},
      });
    }
  }

  displayAnswer(): void {
    if (this.sCurrentAnswer() !== -1) {
      this.questionsStore.ActDisplayAnswer();
      if (this.sCurrentAnswer() === this.sCurrentQuestion()?.correctAnswer) {
        this.questionsStore.ActSetQuestionAnswer(this.sCurrentQuestion()?.id, true);
      } else {
        this.questionsStore.ActSetQuestionAnswer(this.sCurrentQuestion()?.id, false);
      }
    }
  }

  classBtnAnswer(): string {
    if (this.sCurrentAnswer() === -1) {
      return 'button button-disabled';
    } else if (this.sCurrentAnswer() !== -1 && this.sShowAnswer() === false) {
      return 'button';
    } else {
      return 'button button-disabled';
    }
  }

  classBtnNext(): string {
    return this.sShowAnswer() === false ? 'button button-disabled' : 'button';
  }

  showNext(): boolean {
    return this.sCurrentQuestion() && this.sCurrentQuestion()?.id < 14 ? true : false;
  }

  showResult(): boolean {
    return this.sCurrentQuestion() && this.sCurrentQuestion()?.id === 14 ? true : false;
  }
}

