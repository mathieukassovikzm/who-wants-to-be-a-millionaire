import { AnswerModel } from './answer-model';

export interface QuestionModel {
  id: number;
  gain: number;
  question: string;
  // List of answers
  answers: AnswerModel[];
  // Number corresponding to the good answer
  correctAnswer: number;
  // True if contestant answered correctly, else false
  goodAnswer: boolean;
}
