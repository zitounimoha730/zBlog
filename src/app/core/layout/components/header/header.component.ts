import {
  ChangeDetectionStrategy,
  Component, inject, Signal,
  ViewEncapsulation,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';
import { NgClass } from '@angular/common';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'zblog-header',
  imports: [
    MatIcon,
    MatToolbar,
    MatIconButton,
    ReactiveFormsModule,
    MatTooltip,
    NgClass,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  private layoutService = inject(LayoutService);
  protected readonly isDarkMode: Signal<boolean> = this.layoutService.isDarkMode();

  protected toggleView() {
  }

  protected onToggleDarkMode() {
    this.layoutService.setDarkMode(!this.isDarkMode());
  }
}
