import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const questions = [
      {
        id: 0,
        gain: 100,
        question: 'Quel est le nom du bateau qui a sombré après avoir percuté un iceberg dans l\'Atlantique ?',
        answers: [
          { id: 0, answer: 'Le Patchouli', visible: true },
          { id: 1, answer: 'Madael', visible: true },
          { id: 2, answer: 'Le Titanic', visible: true },
          { id: 3, answer: 'Lelali', visible: true }],
        correctAnswer: 2
      },
      {
        id: 1,
        gain: 200,
        question: 'Qui a le plus gros sexe parmi tes fils ?',
        answers: [
          { id: 0, answer: 'Elween', visible: true },
          { id: 1, answer: 'Damien', visible: true },
          { id: 2, answer: 'Mathieu', visible: true },
          { id: 3, answer: 'Winni', visible: true }],
        correctAnswer: 3
      }, {
        id: 2,
        gain: 300,
        question: 'Quand Gilles pèche en mer, quel poisson est-il le plus probable qu\'il ramène ?',
        answers: [
          { id: 0, answer: 'Le lançon', visible: true },
          { id: 1, answer: 'Le bar', visible: true },
          { id: 2, answer: 'Le maquereau', visible: true },
          { id: 3, answer: 'Le poisson panné', visible: true }],
        correctAnswer: 0
      }, {
        id: 3,
        gain: 500,
        question: 'Combien d\'agence Clickeco y a-t-il en France ?',
        answers: [
          { id: 0, answer: '11', visible: true },
          { id: 1, answer: '12', visible: true },
          { id: 2, answer: '13', visible: true },
          { id: 3, answer: '14', visible: true }],
        correctAnswer: 2
      }, {
        id: 4,
        gain: 1000,
        question: 'Qui est le meilleur butteur de l\'équipe de France de Handball ?',
        answers: [
          { id: 0, answer: 'Michael Guigou', visible: true },
          { id: 1, answer: 'Jérome Fernandez', visible: true },
          { id: 2, answer: 'Frederic Folle', visible: true },
          { id: 3, answer: 'Nikola Karabatic', visible: true }],
        correctAnswer: 1
      }, {
        id: 5,
        gain: 2000,
        question: 'Quand s\'est déroulé la première édition du Vent des Globes ?',
        answers: [
          { id: 0, answer: '1989', visible: true },
          { id: 1, answer: '1992', visible: true },
          { id: 2, answer: '1996', visible: true },
          { id: 3, answer: '1997', visible: true }],
        correctAnswer: 0
      }, {
        id: 6,
        gain: 8000,
        question: 'Lequel de ses Châteaux n\'est pas un chateau Bordelais ?',
        answers: [
          { id: 0, answer: 'Pomerol', visible: true },
          { id: 1, answer: 'Saint Emilions', visible: true },
          { id: 2, answer: 'Château Lafite', visible: true },
          { id: 3, answer: 'Dom Pérignon', visible: true }],
        correctAnswer: 3
      }, {
        id: 7,
        gain: 12000,
        question: 'Quel Personnalité connue n\'est pas née en 1963 ?',
        answers: [
          { id: 0, answer: 'Christophe Alévêque', visible: true },
          { id: 1, answer: 'Franck Dubosc', visible: true },
          { id: 2, answer: 'answer C', visible: true },
          { id: 3, answer: 'Elie Semoun', visible: true }],
        correctAnswer: 2
      }, {
        id: 8,
        gain: 12000,
        question: 'En 2020 tu as assisté à un concert de Souchon, quel était la date exacte ?',
        answers: [
          { id: 0, answer: '6 Février 2020', visible: true },
          { id: 1, answer: '13 Février 2020', visible: true },
          { id: 2, answer: '20 Février 2020', visible: true },
          { id: 3, answer: '27 Février 2020', visible: true }],
        correctAnswer: 1
      }, {
        id: 9,
        gain: 24000,
        question: 'Question 10',
        answers: [
          { id: 0, answer: 'answer A', visible: true },
          { id: 1, answer: 'answer B', visible: true },
          { id: 2, answer: 'answer C', visible: true },
          { id: 3, answer: 'answer D', visible: true }],
        correctAnswer: 2
      }, {
        id: 10,
        gain: 36000,
        question: 'Question 11',
        answers: [
          { id: 0, answer: 'answer A', visible: true },
          { id: 1, answer: 'answer B', visible: true },
          { id: 2, answer: 'answer C', visible: true },
          { id: 3, answer: 'answer D', visible: true }],
        correctAnswer: 2
      }, {
        id: 11,
        gain: 72000,
        question: 'Question 12',
        answers: [
          { id: 0, answer: 'answer A', visible: true },
          { id: 1, answer: 'answer B', visible: true },
          { id: 2, answer: 'answer C', visible: true },
          { id: 3, answer: 'answer D', visible: true }],
        correctAnswer: 2
      }, {
        id: 12,
        gain: 150000,
        question: 'Question 13',
        answers: [
          { id: 0, answer: 'answer A', visible: true },
          { id: 1, answer: 'answer B', visible: true },
          { id: 2, answer: 'answer C', visible: true },
          { id: 3, answer: 'answer D', visible: true }],
        correctAnswer: 2
      }, {
        id: 13,
        gain: 300000,
        question: 'Question 14',
        answers: [
          { id: 0, answer: 'answer A', visible: true },
          { id: 1, answer: 'answer B', visible: true },
          { id: 2, answer: 'answer C', visible: true },
          { id: 3, answer: 'answer D', visible: true }],
        correctAnswer: 2
      }, {
        id: 14,
        gain: 1000000,
        question: 'Quel cadeau penses-tu que tu vas avoir pour ton anniversaire ?',
        answers: [
          { id: 0, answer: 'Enceintes stéréo', visible: true },
          { id: 1, answer: 'Un livre de vin', visible: true },
          { id: 2, answer: 'Bureau de travail', visible: true },
          { id: 3, answer: 'Meuble de rangement', visible: true }],
        correctAnswer: 1
      }
    ];
    return { questions };
  }
}
