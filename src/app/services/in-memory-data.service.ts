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
          { id: 1, answer: 'Le Patchouli' },
          { id: 2, answer: 'Madael' },
          { id: 3, answer: 'Le Titanic' },
          { id: 4, answer: 'Lelali' }],
        goodAnswer: 3
      },
      {
        id: 2,
        gain: 200,
        question: 'Qui a le plus gros sexe parmi tes fils ?',
        answers: [
          { id: 1, answer: 'Elween' },
          { id: 2, answer: 'Damien' },
          { id: 3, answer: 'Mathieu' },
          { id: 4, answer: 'Winni' }],
        goodAnswer: 4
      }, {
        id: 3,
        gain: 300,
        question: 'Quand Gilles pèche en mer, quel poisson est-il le plus probable qu\'il ramène ?',
        answers: [
          { id: 1, answer: 'Le lançon' },
          { id: 2, answer: 'Le bar' },
          { id: 3, answer: 'Le maquereau' },
          { id: 4, answer: 'Le poisson panné' }],
        goodAnswer: 1
      }, {
        id: 4,
        gain: 500,
        question: 'Combien d\'agence Clickeco y a-t-il en France ?',
        answers: [
          { id: 1, answer: '11' },
          { id: 2, answer: '12' },
          { id: 3, answer: '13' },
          { id: 4, answer: '14' }],
        goodAnswer: 2
      }, {
        id: 5,
        gain: 1000,
        question: 'Qui est le meilleur butteur de l\'équipe de France de Handball ?',
        answers: [
          { id: 1, answer: 'Michael Guigou' },
          { id: 2, answer: 'Jérome Fernandez' },
          { id: 3, answer: 'Frederic Folle' },
          { id: 4, answer: 'Nikola Karabatic' }],
        goodAnswer: 2
      }, {
        id: 6,
        gain: 2000,
        question: 'Quand s\'est déroulé la première édition du Vent des Globes ?',
        answers: [
          { id: 1, answer: '1989' },
          { id: 2, answer: '1992' },
          { id: 3, answer: '1996' },
          { id: 4, answer: '1997' }],
        goodAnswer: 1
      }, {
        id: 7,
        gain: 8000,
        question: 'Lequel de ses Châteaux n\'est pas un chateau Bordelais ?',
        answers: [
          { id: 1, answer: 'Pomerol' },
          { id: 2, answer: 'Saint Emilions' },
          { id: 3, answer: 'Château Lafite' },
          { id: 4, answer: 'Dom Pérignon' }],
        goodAnswer: 4
      }, {
        id: 8,
        gain: 12000,
        question: 'Quel Personnalité connue n\'est pas née en 1963 ?',
        answers: [
          { id: 1, answer: 'Christophe Alévêque' },
          { id: 2, answer: 'Franck Dubosc' },
          { id: 3, answer: 'answer C' },
          { id: 4, answer: 'Elie Semoun' }],
        goodAnswer: 3
      }, {
        id: 9,
        gain: 12000,
        question: 'En 2020 tu as assisté à un concert de Souchon, quel était la date exacte ?',
        answers: [
          { id: 1, answer: '6 Février 2020' },
          { id: 2, answer: '13 Février 2020' },
          { id: 3, answer: '20 Février 2020' },
          { id: 4, answer: '27 Février 2020' }],
        goodAnswer: 2
      }, {
        id: 10,
        gain: 24000,
        question: 'Question 10',
        answers: [
          { id: 1, answer: 'answer A' },
          { id: 2, answer: 'answer B' },
          { id: 3, answer: 'answer C' },
          { id: 4, answer: 'answer D' }],
        goodAnswer: 2
      }, {
        id: 11,
        gain: 36000,
        question: 'Question 2',
        answers: [
          { id: 1, answer: 'answer A' },
          { id: 2, answer: 'answer B' },
          { id: 3, answer: 'answer C' },
          { id: 4, answer: 'answer D' }],
        goodAnswer: 2
      }, {
        id: 12,
        gain: 72000,
        question: 'Question 2',
        answers: [
          { id: 1, answer: 'answer A' },
          { id: 2, answer: 'answer B' },
          { id: 3, answer: 'answer C' },
          { id: 4, answer: 'answer D' }],
        goodAnswer: 2
      }, {
        id: 13,
        gain: 150000,
        question: 'Question 2',
        answers: [
          { id: 1, answer: 'answer A' },
          { id: 2, answer: 'answer B' },
          { id: 3, answer: 'answer C' },
          { id: 4, answer: 'answer D' }],
        goodAnswer: 2
      }, {
        id: 14,
        gain: 300000,
        question: 'Question 2',
        answers: [
          { id: 1, answer: 'answer A' },
          { id: 2, answer: 'answer B' },
          { id: 3, answer: 'answer C' },
          { id: 4, answer: 'answer D' }],
        goodAnswer: 2
      }, {
        id: 15,
        gain: 1000000,
        question: 'Quel cadeau penses-tu que tu vas avoir pour ton anniversaire ?',
        answers: [
          { id: 1, answer: 'Enceintes stéréo' },
          { id: 2, answer: 'Un livre de vin' },
          { id: 3, answer: 'Bureau de travail' },
          { id: 4, answer: 'Meuble de rangement' }],
        goodAnswer: 2
      }
    ];
    return { questions };
  }
}
