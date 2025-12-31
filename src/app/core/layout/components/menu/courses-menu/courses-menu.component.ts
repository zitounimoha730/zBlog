import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation,} from '@angular/core';
import {MenuItem} from '../../models/menu-item';
import {buildCoursesMenu} from '../../../utils/build-courses-menu';
import {LayoutService} from '../../../services/layout.service';
import {Router} from '@angular/router';

@Component({
  selector: 'zblog-courses-menu',
  imports: [],
  templateUrl: './courses-menu.component.html',
  styleUrl: './courses-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CoursesMenuComponent {
  protected menu: MenuItem[] = buildCoursesMenu();
  private layoutService = inject(LayoutService);
  private router = inject(Router);

  protected toggle(item: MenuItem) {
    item.expanded = !item.expanded;
  }

  protected openCourse(child: MenuItem) {
    this.layoutService.toggleMenu();
    this.router.navigate([`/${child.key}`])
  }
}
