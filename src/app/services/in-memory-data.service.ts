import { Injectable } from '@angular/core';
import { FileBdd } from '@app/models/file-bdd';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as questionsPapa from './questions/questionsPapa.json';
import * as questionsFlo from './questions/questionsFlo.json';
import * as questionsThibu from './questions/questionsThibu.json';
import * as questionsToinou from './questions/questionsToinou.json';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const questions =  (questionsToinou as any as FileBdd).questions;
    const title = (questionsToinou as any as FileBdd).title;
    const age = (questionsToinou as any as FileBdd).birthday;
    const txtfin = (questionsToinou as any as FileBdd).txtFin;
    return { questions, title, age, txtfin };
  }
}
