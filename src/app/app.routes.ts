import {Route, Routes} from '@angular/router';
import {COURSE_CONFIG_MAP} from './courses/config/courses.config';
import {GreetingsComponent} from './greetings/components/greetings.component';

export const routes: Routes = [
  {
    path: 'greetings',
    component: GreetingsComponent,
  },
  {
    path: 'home',
    loadComponent: () => import('./core/home/components/home.component').then(m => m.HomeComponent),
  },
  ...convertConfigToRoutes(),
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

function convertConfigToRoutes() {
  return COURSE_CONFIG_MAP.map(config => ({
    path: config.key,
    component: config.component
  } as Route))
}
