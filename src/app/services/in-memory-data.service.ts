import { Injectable } from '@angular/core';
import { QuestionResponses } from '@app/models/question-response';
import { InMemoryDbService, ResponseOptions } from 'angular-in-memory-web-api';
import * as questionsPapa from './questions/questionsPapa.json';
import * as questionsFlo from './questions/questionsFlo.json';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const questions = (questionsFlo as any as QuestionResponses).questions;
    return { questions };
  }
}
