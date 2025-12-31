import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation,} from '@angular/core';
import {CoursesService} from '../../../../../courses/services/courses.service';
import {CourseModel} from '../../../../../courses/models/course.model';
import {Router} from '@angular/router';

export interface MenuItem {
  label: string;
  children?: MenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'zblog-courses-menu',
  imports: [],
  templateUrl: './courses-menu.component.html',
  styleUrl: './courses-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CoursesMenuComponent {
  menu: MenuItem[] = [
    {
      label: 'Angular',
      expanded: true,
      children: [
        {label: 'Angular 14'},
        {label: 'Angular 20'}
      ]
    },
    {
      label: 'Java',
      children: [
        {label: 'Java 8'},
        {label: 'Java 25'}
      ]
    }
  ];
  protected coursesService = inject(CoursesService);
  private router = inject(Router);

  toggle(item: MenuItem) {
    item.expanded = !item.expanded;
  }

  protected goToCourse(course: CourseModel) {
    this.router.navigate([course.key]).then();
  }
}
