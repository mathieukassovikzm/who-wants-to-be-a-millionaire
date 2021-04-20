import { AnswerModel } from './answer-model';

export interface QuestionModel {
  id: number;
  gain: number;
  question: string;
  answers: AnswerModel[];
  goodAnswer: number;
}
