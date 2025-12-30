import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation,} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {LayoutService} from '../../../services/layout.service';

@Component({
  selector: 'zblog-mini-header',
  imports: [
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './mini-header.component.html',
  styleUrl: './mini-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MiniHeaderComponent {
  private layoutService = inject(LayoutService);

  protected onToggleMenu() {
    this.layoutService.toggleMenu();
  }
}
