import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const questions = [
      {
        id: 1,
        gain: 100,
        question: 'Quel est le nom du bateau qui a sombré après avoir percuté un iceberg dans l\'Atlantique ?',
        answers: [
          { id: 0, answer: 'Le Patchouli' },
          { id: 1, answer: 'Madael' },
          { id: 2, answer: 'Le Titanic' },
          { id: 3, answer: 'Lelali' }],
        goodAnswer: 2
      },
      {
        id: 2,
        gain: 200,
        question: 'Qui a le plus gros sexe parmi tes fils ?',
        answers: [
          { id: 0, answer: 'Elween' },
          { id: 1, answer: 'Damien' },
          { id: 2, answer: 'Mathieu' },
          { id: 3, answer: 'Winni' }],
        goodAnswer: 3
      }, {
        id: 3,
        gain: 300,
        question: 'Quand Gilles pèche en mer, quel poisson est-il le plus probable qu\'il ramène ?',
        answers: [
          { id: 0, answer: 'Le lançon' },
          { id: 1, answer: 'Le bar' },
          { id: 2, answer: 'Le maquereau' },
          { id: 3, answer: 'Le poisson panné' }],
        goodAnswer: 0
      }, {
        id: 4,
        gain: 500,
        question: 'Combien d\'agence Clickeco y a-t-il en France ?',
        answers: [
          { id: 0, answer: '11' },
          { id: 1, answer: '12' },
          { id: 2, answer: '13' },
          { id: 3, answer: '14' }],
        goodAnswer: 2
      }, {
        id: 5,
        gain: 1000,
        question: 'Qui est le meilleur butteur de l\'équipe de France de Handball ?',
        answers: [
          { id: 0, answer: 'Michael Guigou' },
          { id: 1, answer: 'Jérome Fernandez' },
          { id: 2, answer: 'Frederic Folle' },
          { id: 3, answer: 'Nikola Karabatic' }],
        goodAnswer: 1
      }, {
        id: 6,
        gain: 2000,
        question: 'Quand s\'est déroulé la première édition du Vent des Globes ?',
        answers: [
          { id: 0, answer: '1989' },
          { id: 1, answer: '1992' },
          { id: 2, answer: '1996' },
          { id: 3, answer: '1997' }],
        goodAnswer: 0
      }, {
        id: 7,
        gain: 8000,
        question: 'Lequel de ses Châteaux n\'est pas un chateau Bordelais ?',
        answers: [
          { id: 0, answer: 'Pomerol' },
          { id: 1, answer: 'Saint Emilions' },
          { id: 2, answer: 'Château Lafite' },
          { id: 3, answer: 'Dom Pérignon' }],
        goodAnswer: 3
      }, {
        id: 8,
        gain: 12000,
        question: 'Quel Personnalité connue n\'est pas née en 1963 ?',
        answers: [
          { id: 0, answer: 'Christophe Alévêque' },
          { id: 1, answer: 'Franck Dubosc' },
          { id: 2, answer: 'answer C' },
          { id: 3, answer: 'Elie Semoun' }],
        goodAnswer: 2
      }, {
        id: 9,
        gain: 12000,
        question: 'En 2020 tu as assisté à un concert de Souchon, quel était la date exacte ?',
        answers: [
          { id: 0, answer: '6 Février 2020' },
          { id: 1, answer: '13 Février 2020' },
          { id: 2, answer: '20 Février 2020' },
          { id: 3, answer: '27 Février 2020' }],
        goodAnswer: 1
      }, {
        id: 10,
        gain: 24000,
        question: 'Question 10',
        answers: [
          { id: 0, answer: 'answer A' },
          { id: 1, answer: 'answer B' },
          { id: 2, answer: 'answer C' },
          { id: 3, answer: 'answer D' }],
        goodAnswer: 2
      }, {
        id: 11,
        gain: 36000,
        question: 'Question 11',
        answers: [
          { id: 0, answer: 'answer A' },
          { id: 1, answer: 'answer B' },
          { id: 2, answer: 'answer C' },
          { id: 3, answer: 'answer D' }],
        goodAnswer: 2
      }, {
        id: 12,
        gain: 72000,
        question: 'Question 12',
        answers: [
          { id: 0, answer: 'answer A' },
          { id: 1, answer: 'answer B' },
          { id: 2, answer: 'answer C' },
          { id: 3, answer: 'answer D' }],
        goodAnswer: 2
      }, {
        id: 13,
        gain: 150000,
        question: 'Question 13',
        answers: [
          { id: 0, answer: 'answer A' },
          { id: 1, answer: 'answer B' },
          { id: 2, answer: 'answer C' },
          { id: 3, answer: 'answer D' }],
        goodAnswer: 2
      }, {
        id: 14,
        gain: 300000,
        question: 'Question 14',
        answers: [
          { id: 0, answer: 'answer A' },
          { id: 1, answer: 'answer B' },
          { id: 2, answer: 'answer C' },
          { id: 3, answer: 'answer D' }],
        goodAnswer: 2
      }, {
        id: 15,
        gain: 1000000,
        question: 'Quel cadeau penses-tu que tu vas avoir pour ton anniversaire ?',
        answers: [
          { id: 0, answer: 'Enceintes stéréo' },
          { id: 1, answer: 'Un livre de vin' },
          { id: 2, answer: 'Bureau de travail' },
          { id: 3, answer: 'Meuble de rangement' }],
        goodAnswer: 1
      }
    ];
    return { questions };
  }
}
