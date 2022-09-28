import { QuestionModel } from "./question-model";
import { TxtFin } from "./txt-fin";

export interface FileBdd {
  questions: QuestionModel[] ;
  title: string;
  birthday: string;
  txtFin : TxtFin;
}