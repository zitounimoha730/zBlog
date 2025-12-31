import {CourseEnum} from '../enums/course.enum';
import {Java25Component} from '../components/java/java25.component';
import {Angular21Component} from '../components/angular/angular21.component';
import {Angular20Component} from '../components/angular/angular20.component';
import {NgxsComponent} from '../components/angular/ngxs.component';
import {Java24Component} from '../components/java/java24.component';

export const COURSE_CONFIG_MAP = {
  "Angular": [
    {
      key: CourseEnum.ANGULAR_21,
      label: 'Angular 21',
      component: Angular21Component,
    },
    {
      key: CourseEnum.ANGULAR_20,
      label: 'Angular 20',
      component: Angular20Component,
    },
    {
      key: CourseEnum.NGXS,
      label: 'NgXs',
      component: NgxsComponent,
    },],
  "Java": [{
    key: CourseEnum.JAVA_25,
    label: 'Java 25',
    component: Java25Component,
  },
    {
      key: CourseEnum.JAVA_24,
      label: 'Java 24',
      component: Java24Component,
    }]
}
