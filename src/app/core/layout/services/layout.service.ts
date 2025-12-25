import {Injectable, Signal, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private isDarkMode$: WritableSignal<boolean> = signal<boolean>(false);

  public isDarkMode(): Signal<boolean> {
    return this.isDarkMode$.asReadonly();
  }

  public setDarkMode(value: boolean) {
    this.isDarkMode$.set(value);
  }
}
