import { Injectable } from '@angular/core';
import { FileBdd } from '@app/models/file-bdd';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as questionsPapa from './questions/questionsPapa.json';
import * as questionsFlo from './questions/questionsFlo.json';
import * as questionsThibu from './questions/questionsThibu.json';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const questions = (questionsThibu as any as FileBdd).questions;
    const title = (questionsThibu as any as FileBdd).title;
    const age = (questionsThibu as any as FileBdd).birthday;
    const txtfin = (questionsThibu as any as FileBdd).txtFin;
    return { questions, title, age, txtfin };
  }
}
