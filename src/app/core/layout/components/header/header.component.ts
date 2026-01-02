import {ChangeDetectionStrategy, Component, effect, inject, Signal, ViewEncapsulation,} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe, NgClass} from '@angular/common';
import {LayoutService} from '../../services/layout.service';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {ResponsiveService} from '../../services/responsive.service';
import {map, Observable, startWith} from 'rxjs';
import {ALL_COURSE_CONFIG} from '../../../../courses/config/courses-config-item';
import {CourseConfigItem} from '../../../../courses/models/courseConfigItem';
import {toSignal} from '@angular/core/rxjs-interop';
import {Router} from '@angular/router';

@Component({
  selector: 'zblog-header',
  imports: [
    MatIcon,
    MatToolbar,
    MatIconButton,
    ReactiveFormsModule,
    NgClass,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatOption,
    MatFormField,
    MatLabel,
    MatInput,
    AsyncPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  protected searchControl = new FormControl<CourseConfigItem | undefined>(undefined, {nonNullable: true});
  protected matchingSearch$: Signal<CourseConfigItem[]> = toSignal(this.searchControl.valueChanges.pipe(
    startWith(''),
    map(value => this.filterCourses(value))
  ), {initialValue: []});
  private allCourses: CourseConfigItem[] = this.extractSearchItems(ALL_COURSE_CONFIG);
  private layoutService = inject(LayoutService);
  private responsiveService = inject(ResponsiveService);
  private searchChange$: Signal<CourseConfigItem | undefined | string>;
  private router = inject(Router);

  constructor() {
    this.searchChange$ = toSignal(this.searchControl.valueChanges, {initialValue: undefined});
    effect(() => {
      const value = this.searchChange$();
      if (value && (value as CourseConfigItem)["path"]) {
        this.router.navigate([`/${(value as CourseConfigItem)["path"]}`]);
      }
    });
  }

  protected isMobile(): Observable<boolean> {
    return this.responsiveService.isMobile();
  }

  protected displaySearchFn(course: CourseConfigItem | undefined): string {
    return course?.label ?? '';
  }

  protected onToggleMenu() {
    this.layoutService.toggleMenu();
  }

  private filterCourses(value: string | CourseConfigItem | undefined): CourseConfigItem[] {
    const search = typeof value === 'string' ? value : value?.label;
    return this.allCourses.filter(c =>
      c.label.toLowerCase().includes(search?.toLowerCase() ?? '')
    );
  }

  private extractSearchItems(courses: CourseConfigItem[]): CourseConfigItem[] {
    const all = [];
    for (let i = 0; i < courses.length; i++) {
      const course = courses[i];
      if (course.path) {
        all.push(course);
      }
      if (course.children) {
        const allChildren = this.extractSearchItems(course.children);
        all.push(...allChildren);
      }
    }
    return all;
  }
}
