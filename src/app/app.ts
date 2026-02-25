import {Component, effect, inject, OnInit, Renderer2} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {LayoutComponent} from './core/layout/components/layout.component';
import {LayoutService} from './core/layout/services/layout.service';
import {Observable} from 'rxjs';
import {ResponsiveService} from './core/layout/services/responsive.service';
import {AsyncPipe, NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent, NgClass, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly renderer = inject(Renderer2);
  private readonly DARK_THEME = 'dark-theme';
  private layoutService = inject(LayoutService);
  private responsiveService = inject(ResponsiveService);
  private router = inject(Router);

  constructor() {
    this.initEffetcs();
    this.openLastPage();
  }

  private openLastPage() {
    const lastRoute = localStorage.getItem('last-route');
    if(lastRoute) {
      this.router.navigate([`/${lastRoute}`]).then();
    }
  }

  protected isMobile(): Observable<boolean> {
    return this.responsiveService.isMobile();
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
