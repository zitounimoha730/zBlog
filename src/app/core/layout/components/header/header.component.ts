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
import {CourseItem} from '../../../../courses/models/courseItem';
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
  protected searchControl = new FormControl<CourseItem | undefined>(undefined, {nonNullable: true});
  protected matchingSearch$: Signal<CourseItem[]>;
  private allCourses: CourseItem[];
  private layoutService = inject(LayoutService);
  private responsiveService = inject(ResponsiveService);
  private searchChange$: Signal<CourseItem | undefined | string>;
  private router = inject(Router);

  constructor() {
    this.searchChange$ = toSignal(this.searchControl.valueChanges, {initialValue: undefined});
    effect(() => {
      const value = this.searchChange$();
      if (value && (value as CourseItem)["path"]) {
        this.router.navigate([`/${(value as CourseItem)["path"]}`]);
      }
    });
    this.allCourses = this.extractSearchItems(ALL_COURSE_CONFIG);
    this.matchingSearch$ = toSignal(this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterCourses(value))
    ), {initialValue: []});
  }

  protected isMobile(): Observable<boolean> {
    return this.responsiveService.isMobile();
  }

  protected displaySearchFn(course: CourseItem | undefined): string {
    return course?.label ?? '';
  }

  protected onToggleMenu() {
    this.layoutService.toggleMenu();
  }

  private filterCourses(value: string | CourseItem | undefined): CourseItem[] {
    const search = typeof value === 'string' ? value : value?.label;
    return this.allCourses.filter(c =>
      c.label.toLowerCase().includes(search?.toLowerCase() ?? '')
    );
  }

  private extractSearchItems(courses: CourseItem[]): CourseItem[] {
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
