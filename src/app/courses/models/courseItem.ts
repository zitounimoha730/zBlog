import {AbstractCourseComponent} from '../components/abstract-course.component';

export interface CourseItem {
  path?: string;
  label: string;
  expanded?: boolean;
  component?: AbstractCourseComponent,
  children?: CourseItem[]
}
