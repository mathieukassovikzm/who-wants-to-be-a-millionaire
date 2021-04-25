import { QuestionsEffects } from './question';
import { RouterEffects } from './router';

export const effects: any[] = [
  QuestionsEffects,
  RouterEffects
];

export * from './question';
export * from './router';
