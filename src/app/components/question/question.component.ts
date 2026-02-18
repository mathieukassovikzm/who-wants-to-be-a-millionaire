
import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    ...svgs
  ],
  standalone: true
})
export class QuestionComponent implements OnInit {
  readonly questionsStore = inject(QuestionsStore);
  readonly route = inject(ActivatedRoute);

  public sCurrentQuestion = this.questionsStore.getCurrentQuestion;
  public sCurrentAnswer = this.questionsStore.answerChosen;
  public sShowAnswer = this.questionsStore.displayAnswer;
  public sJokerFiftyUsed = this.questionsStore.jokerFiftyUsed;

  private correctAnswer = computed(() => this.questionsStore.getCurrentQuestion().correctAnswer);

  constructor() { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.questionsStore.ActSetCurrentQuestionId(params.questionId);
    });
  }

  selectAnswer(answerId: number): void {
    this.questionsStore.ActSetAnswerChosen(answerId);
  }

  getClassAnswers(answerId: number): string {
    if (this.sShowAnswer() === false && this.sCurrentAnswer() === answerId) {
      return 'answer answer-candidate';
    } else if (this.sShowAnswer() === false && this.sCurrentAnswer() !== answerId) {
      return 'answer';
    } else if (this.sShowAnswer() === true && this.correctAnswer() === answerId) {
      return 'answer answer-good';
    } else if (this.sShowAnswer() === true && this.sCurrentAnswer() === answerId && this.sCurrentAnswer() !== this.correctAnswer()) {
      return 'answer answer-wrong';
    } else {
      return 'answer';
    }
  }
}
