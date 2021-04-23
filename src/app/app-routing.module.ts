import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  MainComponent
} from './pages';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('@app/pages/home/home.module')
        .then(m => m.HomeModule),
    component: HomeComponent,
  },
  {
    path: 'question:/id',
    loadChildren: () =>
      import('@app/pages/main/main.module')
        .then(m => m.MainModule),
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
