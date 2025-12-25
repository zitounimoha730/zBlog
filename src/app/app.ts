import {Component, effect, inject, Renderer2} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LayoutComponent} from './core/layout/components/layout.component';
import {LayoutService} from './core/layout/services/layout.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly renderer = inject(Renderer2);
  private readonly DARK_THEME = 'dark-theme';
  private layoutService = inject(LayoutService);

  constructor() {
    this.initEffetcs();
  }

  private initEffetcs() {
    effect(() => {
      const isDarkMode = this.layoutService.isDarkMode();
      if (isDarkMode()) {
        this.renderer.addClass(document.body, this.DARK_THEME)
      } else {
        this.renderer.removeClass(document.body, this.DARK_THEME)
      }
    });
  }
}
