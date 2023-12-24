import { Injectable } from '@angular/core';
import { FileBdd } from '@app/models/file-bdd';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// import jsonQuestions from './questions/questionsPapa.json';
// import jsonQuestions from './questions/questionsFlo.json';
// import jsonQuestions from './questions/questionsThibu.json';
// import jsonQuestions from './questions/questionsToinou.json';
import jsonQuestions from './questions/questionsRomainNoel.json';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const questions = (jsonQuestions as any as FileBdd).questions;
    const title = (jsonQuestions as any as FileBdd).title;
    const age = (jsonQuestions as any as FileBdd).birthday;
    const txtfin = (jsonQuestions as any as FileBdd).txtFin;
    return { questions, title, age, txtfin };
  }
}
