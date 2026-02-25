import {Injectable, Signal, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private isDarkMode$: WritableSignal<boolean> = signal<boolean>(false);
  private isMenuOpened$: WritableSignal<boolean> = signal<boolean>(false);

  public isDarkMode(): Signal<boolean> {
    return this.isDarkMode$.asReadonly();
  }

  public setDarkMode(value: boolean) {
    this.isDarkMode$.set(value);
  }

  public toggleMenu() {
    this.isMenuOpened$.update(previous => !previous);
  }

  public isMenuOpened() {
    return this.isMenuOpened$.asReadonly();
  }
}
