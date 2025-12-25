import {AbstractCourseComponent} from '../components/abstract-course.component';

export interface CourseModel {
  label: string;
  key: string;
  component: AbstractCourseComponent,
}
