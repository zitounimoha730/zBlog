import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'greetings',
    loadComponent: () => import('./greetings/components/greetings.component').then(m => m.GreetingsComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'greetings',
  },
  {
    path: '**',
    redirectTo: 'greetings',
  },
];
