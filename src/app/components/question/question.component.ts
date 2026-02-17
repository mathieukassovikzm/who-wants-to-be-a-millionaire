import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { QuestionsStore } from '@app/store/question.store';
import { SvgGainComponent } from '../svgs/svg-gain/svg-gain.component';
import { SvgLosangeComponent } from '../svgs/svg-losange/svg-losange.component';

const svgs = [
  SvgGainComponent,
  SvgLosangeComponent
];

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  imports: [
    CommonModule,
    ...svgs
  ],
  standalone: true
})
export class QuestionComponent implements OnInit {
  readonly questionsStore = inject(QuestionsStore);

  public currentQuestion = this.questionsStore.getCurrentQuestion();
  public currentAnswer = this.questionsStore.answerChosen;
  public showAnswer = this.questionsStore.displayAnswer;
  public jokerFiftyUsed = this.questionsStore.jokerFiftyUsed;

  private correctAnswer = computed(() => this.questionsStore.getCurrentQuestion().correctAnswer);
  constructor() {
  }

  ngOnInit(): void {
  }

  selectAnswer(answerId: number): void {
    this.questionsStore.ActSetAnswerChosen(answerId);
  }

  getClassAnswers(answerId: number): string {
    if (this.showAnswer() === false && this.currentAnswer() === answerId) {
      return 'answer answer-candidate';
    } else if (this.showAnswer() === false && this.currentAnswer() !== answerId) {
      return 'answer';
    } else if (this.showAnswer() === true && this.correctAnswer() === answerId) {
      return 'answer answer-good';
    } else if (this.showAnswer() === true && this.currentAnswer() === answerId && this.currentAnswer() !== this.correctAnswer()) {
      return 'answer answer-wrong';
    } else {
      return 'answer';
    }
  }
}
