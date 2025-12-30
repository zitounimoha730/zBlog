import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation,} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {CoursesService} from '../../../../courses/services/courses.service';
import {CourseModel} from '../../../../courses/models/course.model';
import {Router} from '@angular/router';

@Component({
  selector: 'zblog-courses-menu',
  imports: [
    MatButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
  ],
  templateUrl: './courses-menu.component.html',
  styleUrl: './courses-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CoursesMenuComponent {
  protected coursesService = inject(CoursesService);
  private router = inject(Router);

  protected goToCourse(course: CourseModel) {
    this.router.navigate([course.key]).then();
  }
}
