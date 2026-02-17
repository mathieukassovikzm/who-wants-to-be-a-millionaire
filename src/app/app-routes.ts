import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('@app/pages/home/home.component')
        .then(m => m.HomeComponent),
  },
  {
    path: 'question/:questionId',
    loadComponent: () =>
      import('@app/pages/main/main.component')
        .then(m => m.MainComponent),
  },
  {
    path: 'results',
    loadComponent: () =>
      import('@app/pages/results/results.component')
        .then(m => m.ResultsComponent),
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];