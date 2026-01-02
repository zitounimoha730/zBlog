import {AbstractCourseComponent} from '../components/abstract-course.component';

export interface CourseConfigItem {
  path?: string;
  label: string;
  expanded?: boolean;
  component?: AbstractCourseComponent,
  children?: CourseConfigItem[]
}
