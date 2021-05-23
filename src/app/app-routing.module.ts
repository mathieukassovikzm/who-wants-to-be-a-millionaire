import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('@app/pages/home/home.module')
        .then(m => m.HomeModule),
  },
  {
    path: 'question/:questionId',
    loadChildren: () =>
      import('@app/pages/main/main.module')
        .then(m => m.MainModule),
  },
  {
    path: 'results',
    loadChildren: () =>
      import('@app/pages/results/results.module')
        .then(m => m.ResultsModule),
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
