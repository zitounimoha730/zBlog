import {ChangeDetectionStrategy, Component, inject, Signal, ViewEncapsulation,} from '@angular/core';
import {LayoutService} from '../../services/layout.service';
import {NgClass} from '@angular/common';
import {CoursesMenuComponent} from '../courses-menu/courses-menu.component';

@Component({
  selector: 'zblog-menu',
  imports: [
    NgClass,
    CoursesMenuComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent {
  protected layoutService = inject(LayoutService);
  protected readonly isMenuOpened: Signal<boolean> = this.layoutService.isMenuOpened();
}
