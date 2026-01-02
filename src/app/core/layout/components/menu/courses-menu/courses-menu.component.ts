import {ChangeDetectionStrategy, Component, inject, signal, ViewEncapsulation, WritableSignal,} from '@angular/core';
import {LayoutService} from '../../../services/layout.service';
import {Router} from '@angular/router';
import {CourseConfigItem} from '../../../../../courses/models/courseConfigItem';
import {ALL_COURSE_CONFIG} from '../../../../../courses/config/courses-config-item';
import {NgClass} from '@angular/common';

@Component({
  selector: 'zblog-courses-menu',
  imports: [
    NgClass
  ],
  templateUrl: './courses-menu.component.html',
  styleUrl: './courses-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CoursesMenuComponent {
  protected menu: CourseConfigItem[] = ALL_COURSE_CONFIG
  protected selectedCourse: WritableSignal<CourseConfigItem | undefined> = signal(undefined);
  private layoutService = inject(LayoutService);
  private router = inject(Router);

  protected toggle(item: CourseConfigItem) {
    item.expanded = !item.expanded;
  }

  protected openCourse(item: CourseConfigItem) {
    if (item.path) {
      this.selectedCourse.set(item);
      this.layoutService.toggleMenu();
      this.router.navigate([`/${item.path}`]);
    }
  }
}
