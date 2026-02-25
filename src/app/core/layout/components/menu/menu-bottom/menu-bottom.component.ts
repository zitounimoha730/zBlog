import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {NgClass} from '@angular/common';

@Component({
  selector: 'zblog-menu-bottom',
  imports: [MatIcon, MatIconButton, NgClass],
  templateUrl: './menu-bottom.component.html',
  styleUrl: './menu-bottom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBottomComponent {
  public isMenuOpened = input.required<boolean>();
  public isDarkMode = input.required<boolean>();
  public version = input.required<string>();
  public toggleDarkMode = output<void>();

  protected onToggleDarkMode() {
    this.toggleDarkMode.emit();
  }
}
