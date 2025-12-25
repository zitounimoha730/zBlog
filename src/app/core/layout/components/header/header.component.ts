import {ChangeDetectionStrategy, Component, inject, signal, Signal, ViewEncapsulation,} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatTooltip} from '@angular/material/tooltip';
import {NgClass} from '@angular/common';
import {LayoutService} from '../../services/layout.service';
import _ from 'lodash';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {Router} from '@angular/router';
import {CoursesService} from '../../../../courses/services/courses.service';
import {CourseModel} from '../../../../courses/models/course.model';

@Component({
  selector: 'zblog-header',
  imports: [
    MatIcon,
    MatToolbar,
    MatIconButton,
    ReactiveFormsModule,
    MatTooltip,
    NgClass,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatOption,
    MatFormField,
    MatLabel,
    MatInput,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatButton
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  protected searchControl = new FormControl<string>('', {nonNullable: true});
  protected matchingSearch$: Signal<string[]> = signal(['hello', 'world', 'angular', 'java']);
  protected coursesService = inject(CoursesService);
  private layoutService = inject(LayoutService);
  protected readonly isDarkMode: Signal<boolean> = this.layoutService.isDarkMode();
  private router = inject(Router);

  protected goToHomePage() {
    this.router.navigate(['home']).then();
  }

  protected goToCourse(course: CourseModel) {
    this.router.navigate([course.key]).then();
  }

  protected displaySearchFn(searchTerm: string): string {
    return searchTerm ?? '';
  }

  protected onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const matchingEvents = this.matchingSearch$();
      if (matchingEvents && matchingEvents.length > 0) {
        const firstOptions = _.first(matchingEvents);
        if (firstOptions) {
          this.searchControl.setValue(firstOptions);
        }
        event.preventDefault();
      }
    }
  }

  protected toggleView() {
  }

  protected onToggleDarkMode() {
    this.layoutService.setDarkMode(!this.isDarkMode());
  }
}
