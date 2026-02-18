
import { Component, inject } from '@angular/core';
import { QuestionsStore } from '@app/store/question.store';
import { SvgGainComponent } from '../svgs/svg-gain/svg-gain.component';
import { SvgLosangeComponent } from '../svgs/svg-losange/svg-losange.component';

@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.scss'],
  imports: [
    SvgGainComponent,
    SvgLosangeComponent
  ],
  standalone: true
})
export class PyramidComponent {
  readonly questionsStore = inject(QuestionsStore);

  sQuestions = this.questionsStore.lstQuestions;
  sCurrentQuestion = this.questionsStore.getCurrentQuestion;
  sShowAnswer = this.questionsStore.displayAnswer;

  constructor() {
  }

  getClass(index: number): string {
   const currentQuestion = this.sCurrentQuestion();
    if (currentQuestion) {
      if (index === currentQuestion.id && this.isStage(index)) {
        return 'item item-active item-stage';
      }
      else if (index === currentQuestion.id && !this.isStage(index)) {
        return 'item item-active ';
      }
      else if (index < currentQuestion.id && this.isStage(index)) {
        return 'item item-passed item-stage';
      }
      else if (index < currentQuestion.id && !this.isStage(index)) {
        return 'item item-passed';
      }
      else if (index > currentQuestion.id && this.isStage(index)) {
        return 'item item-stage';
      }
      else {
        return 'item';
      }
    } else {
      return 'item item-passed';
    }
  }
  getClassDot(index: number): string {
    const question = this.questionsStore.getQuestion(index);

    if (question.goodAnswer === true) {
      return 'txt-dot answer-right';
    }
    else if (question.goodAnswer === false) {
      return 'txt-dot answer-wrong';
    }
    else {
      return 'txt-dot';
    }
  }

  isStage(index: number): boolean {
    if (index === 5 || index === 10 || index === 15) {
      return true;
    } else {
      return false;
    }
  }
}
