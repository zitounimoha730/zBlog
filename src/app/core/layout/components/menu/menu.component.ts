import {ChangeDetectionStrategy, Component, inject, Signal, ViewEncapsulation,} from '@angular/core';
import {LayoutService} from '../../services/layout.service';
import {AsyncPipe, NgClass} from '@angular/common';
import {MatDivider} from '@angular/material/divider';
import {MenuBottomComponent} from './menu-bottom/menu-bottom.component';
import {Observable} from 'rxjs';
import {ResponsiveService} from '../../services/responsive.service';
import {CoursesMenuComponent} from './courses-menu/courses-menu.component';

@Component({
  selector: 'zblog-menu',
  imports: [
    NgClass,
    MatDivider,
    MenuBottomComponent,
    AsyncPipe,
    CoursesMenuComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent {
  private layoutService = inject(LayoutService);
  protected readonly isMenuOpened: Signal<boolean> = this.layoutService.isMenuOpened();
  protected readonly isDarkMode: Signal<boolean> = this.layoutService.isDarkMode();
  private responsiveService = inject(ResponsiveService);

  protected isMobile(): Observable<boolean> {
    return this.responsiveService.isMobile();
  }

  protected onToggleDarkMode() {
    this.layoutService.setDarkMode(!this.isDarkMode());
  }
}
