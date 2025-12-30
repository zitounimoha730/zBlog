import {ChangeDetectionStrategy, Component, inject, signal, Signal, ViewEncapsulation,} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe, NgClass} from '@angular/common';
import {LayoutService} from '../../services/layout.service';
import _ from 'lodash';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {Router} from '@angular/router';
import {ResponsiveService} from '../../services/responsive.service';
import {Observable} from 'rxjs';
import {MiniHeaderComponent} from './mini-header/mini-header.component';
import {CoursesMenuComponent} from '../courses-menu/courses-menu.component';

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
    MiniHeaderComponent,
    CoursesMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  protected searchControl = new FormControl<string>('', {nonNullable: true});
  protected matchingSearch$: Signal<string[]> = signal(['hello', 'world', 'angular', 'java']);
  private layoutService = inject(LayoutService);
  protected readonly isDarkMode: Signal<boolean> = this.layoutService.isDarkMode();
  private router = inject(Router);
  private responsiveService = inject(ResponsiveService);

  protected isMobile(): Observable<boolean> {
    return this.responsiveService.isMobile();
  }

  protected goToHomePage() {
    this.router.navigate(['home']).then();
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

  protected onToggleDarkMode() {
    this.layoutService.setDarkMode(!this.isDarkMode());
  }
}
