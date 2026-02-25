import {Routes} from '@angular/router';
import {ALL_COURSE_CONFIG} from './courses/config/courses-config-item';
import {CourseItem} from './courses/models/courseItem';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./core/home/components/home.component').then(m => m.HomeComponent),
  },
  ...convertConfigToRoutes(),
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

function convertConfigToRoutes() {
  return getCoursesPaths(ALL_COURSE_CONFIG);
}

function getCoursesPaths(courses: CourseItem[]) {
  const routes: any[] = []
  for (let i = 0; i < courses.length; i++) {
    const course = courses[i];
    if (course.component) {
      const route = {path: course.path, component: course.component!};
      routes.push(route);
    }
    if (course.children) {
      const childrenRoutes = getCoursesPaths(course.children);
      routes.push(...childrenRoutes);
    }
  }
  return routes;
}
