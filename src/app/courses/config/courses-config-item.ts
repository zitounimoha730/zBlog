import {Java25Component} from '../components/java/java25.component';
import {Angular21Component} from '../components/angular/angular21.component';
import {Angular20Component} from '../components/angular/angular20.component';
import {NgxsComponent} from '../components/angular/ngxs.component';
import {Java24Component} from '../components/java/java24.component';
import {CourseItem} from '../models/courseItem';
import {DesignPatternsComponent} from '../components/design-patterns/design-patternscomponent';

export const ALL_COURSE_CONFIG: CourseItem[] = [
  {
    label: "Angular",
    children: [
      {
        path: 'angular21',
        label: 'Angular 21',
        component: Angular21Component,
        children: []
      },
      {
        path: 'angular20',
        label: 'Angular 20',
        component: Angular20Component,
        children: []
      },
      {
        path: 'ngxs',
        label: 'NgXs',
        component: NgxsComponent,
        children: []
      }
    ]
  },
  {
    label: 'Java',
    children: [{
      path: 'java25',
      label: 'Java 25',
      component: Java25Component,
    },
      {
        path: 'java24',
        label: 'Java 24',
        component: Java24Component,
      }]
  },
  {
    label: 'Design Patterns',
    path: 'design-patterns',
    component: DesignPatternsComponent
  }
];
