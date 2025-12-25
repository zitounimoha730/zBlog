import {Injectable} from '@angular/core';
import {ANGULAR_COURSES, JAVA_COURSES} from '../config/courses.config';
import {CourseModel} from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public angularCourses(): CourseModel[] {
    return ANGULAR_COURSES;
  }

  public javaCourses(): CourseModel[] {
    return JAVA_COURSES;
  }
}
