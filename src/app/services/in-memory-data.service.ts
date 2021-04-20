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
        question: 'Question 1',
        answers: [
          { id: 1, answer: 'answer A' },
          { id: 2, answer: 'answer B' },
          { id: 3, answer: 'answer C' },
          { id: 4, answer: 'answer D' }],
        goodAnswer: 2
      },
      {
        id: 2,
        gain: 200,
        question: 'Question 2',
        answers: [
          { id: 1, answer: 'answer A' },
          { id: 2, answer: 'answer B' },
          { id: 3, answer: 'answer C' },
          { id: 4, answer: 'answer D' }],
        goodAnswer: 2
      }, {
        id: 3,
        gain: 300,
        question: 'Question 2',
        answers: [
          { id: 1, answer: 'answer A' },
          { id: 2, answer: 'answer B' },
          { id: 3, answer: 'answer C' },
          { id: 4, answer: 'answer D' }],
        goodAnswer: 2
      }, {
        id: 4,
        gain: 500,
        question: 'Question 2',
        answers: [
          { id: 1, answer: 'answer A' },
          { id: 2, answer: 'answer B' },
          { id: 3, answer: 'answer C' },
          { id: 4, answer: 'answer D' }],
        goodAnswer: 2
      }, {
        id: 5,
        gain: 1000,
        question: 'Question 2',
        answers: [
          { id: 1, answer: 'answer A' },
          { id: 2, answer: 'answer B' },
          { id: 3, answer: 'answer C' },
          { id: 4, answer: 'answer D' }],
        goodAnswer: 2
      }, {
        id: 6,
        gain: 2000,
        question: 'Question 2',
        answers: [
          { id: 1, answer: 'answer A' },
          { id: 2, answer: 'answer B' },
          { id: 3, answer: 'answer C' },
          { id: 4, answer: 'answer D' }],
        goodAnswer: 2
      }, {
        id: 7,
        gain: 8000,
        question: 'Question 2',
        answers: [
          { id: 1, answer: 'answer A' },
          { id: 2, answer: 'answer B' },
          { id: 3, answer: 'answer C' },
          { id: 4, answer: 'answer D' }],
        goodAnswer: 2
      }, {
        id: 8,
        gain: 12000,
        question: 'Question 2',
        answers: [
          { id: 1, answer: 'answer A' },
          { id: 2, answer: 'answer B' },
          { id: 3, answer: 'answer C' },
          { id: 4, answer: 'answer D' }],
        goodAnswer: 2
      }, {
        id: 9,
        gain: 12000,
        question: 'Question 2',
        answers: [
          { id: 1, answer: 'answer A' },
          { id: 2, answer: 'answer B' },
          { id: 3, answer: 'answer C' },
          { id: 4, answer: 'answer D' }],
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
        question: 'Question 2',
        answers: [
          { id: 1, answer: 'answer A' },
          { id: 2, answer: 'answer B' },
          { id: 3, answer: 'answer C' },
          { id: 4, answer: 'answer D' }],
        goodAnswer: 2
      }
    ];
    return { questions };
  }
}
