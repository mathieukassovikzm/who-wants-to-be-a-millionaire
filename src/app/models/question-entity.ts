import { QuestionModel } from "./question-model";

export interface QuestionEntity {
  lstQuestions: { [id: number]: QuestionModel };
}