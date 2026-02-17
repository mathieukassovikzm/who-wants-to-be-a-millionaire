import { Component, inject } from '@angular/core';
import { QuestionModel } from '@app/models/question-model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
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
    CommonModule,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    PyramidComponent,
    QuestionComponent,
    SvgCircleGainComponent,
  ],
  standalone: true
})
export class MainComponent {
  readonly router = inject(Router);
  readonly infosAppStore = inject(InfosAppStore);
  readonly questionsStore = inject(QuestionsStore);

  public title = this.infosAppStore.getTitle();
  public birthday = this.infosAppStore.getAge();
  public menuOpened = this.infosAppStore.menuOpened();

  public questions: Observable<QuestionModel[]>;
  public currentQuestion = this.questionsStore.getCurrentQuestion();
  public currentAnswer = this.questionsStore.answerChosen;
  public showAnswer = this.questionsStore.displayAnswer;

  constructor() { }

  getMainClass(): string {
    return this.menuOpened ? 'main-section opened' : 'main-section';
  }

  nextQuestion(): void {
    if (this.showAnswer() === true) {
      this.questionsStore.ActNextQuestion();
      this.questionsStore.ActResetAnswerChosen();
      this.questionsStore.ActHideAnswer();
      this.router.navigate([`/question/${this.currentQuestion.id + 1}`], {
        queryParams: {},
      });
    }
  }

  toResult(): void {
    if (this.showAnswer() === true) {
      this.router.navigate([`/results`], {
        queryParams: {},
      });
    }
  }

  displayAnswer(): void {
    if (this.currentAnswer() !== -1) {
      this.questionsStore.ActDisplayAnswer();
      if (this.currentAnswer() === this.currentQuestion.correctAnswer) {
        this.questionsStore.ActSetQuestionAnswerRight(this.currentQuestion.id);
      } else {
        this.questionsStore.ActSetQuestionAnswerWrong(this.currentQuestion.id);
      }
    }
  }

  classBtnAnswer(): string {
    if (this.currentAnswer() === -1) {
      return 'button button-disabled';
    } else if (this.currentAnswer() !== -1 && this.showAnswer() === false) {
      return 'button';
    } else {
      return 'button button-disabled';
    }
  }

  classBtnNext(): string {
    return this.showAnswer() === false ? 'button button-disabled' : 'button';
  }

  showNext(): boolean {
    return this.currentQuestion && this.currentQuestion.id < 14 ? true : false;
  }

  showResult(): boolean {
    return this.currentQuestion && this.currentQuestion.id === 14 ? true : false;
  }
}

