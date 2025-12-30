import {inject, Injectable} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private static readonly LIMITE_MOBILE_SWITCH = '700px';
  private readonly observer = inject(BreakpointObserver);
  private readonly _isMobile$: Observable<boolean>;

  constructor() {
    this._isMobile$ = this.observer
      .observe(['(max-width: ' + ResponsiveService.LIMITE_MOBILE_SWITCH + ')'])
      .pipe(map(screen => screen.matches));
  }

  public isMobile() {
    return this._isMobile$;
  }
}
