import {ChangeDetectionStrategy, Component, ViewEncapsulation,} from '@angular/core';
import {MenuItem} from '../../models/menu-item';
import {buildCoursesMenu} from '../../../utils/build-courses-menu';

@Component({
  selector: 'zblog-courses-menu',
  imports: [],
  templateUrl: './courses-menu.component.html',
  styleUrl: './courses-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CoursesMenuComponent {
  menu: MenuItem[] = buildCoursesMenu();

  toggle(item: MenuItem) {
    item.expanded = !item.expanded;
  }
}
