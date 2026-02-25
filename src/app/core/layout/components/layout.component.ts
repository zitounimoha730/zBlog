import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';

@Component({
  selector: 'zblog-layout',
  imports: [HeaderComponent, MenuComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
}
