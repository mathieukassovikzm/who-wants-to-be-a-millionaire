import { Injectable } from '@angular/core';
import { QuestionModel } from '@app/models/question-model';
import { birthday, questions, title, txtFin } from './questions/questionsRomainNoel';
import { TxtFin } from '@app/models/txt-fin';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  constructor() { }

  /** GET Questions from the server */
  getQuestionsFromServeur(): QuestionModel[] {
    return questions;
  }

  getTitleFromServeur(): string {
    return title;
  }

  getAgeFromServeur(): string {
    return birthday;
  }

  getTxtFinFromServeur(): TxtFin {
    return txtFin;
  }
}
