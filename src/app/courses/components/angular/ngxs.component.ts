import {Component} from '@angular/core';
import {AbstractCourseComponent} from '../abstract-course.component';

@Component({
  selector: 'zblog-angular21',
  imports: [],
  template: `
    <h2>NgXs</h2>
    <h3>Dependencies</h3>
    <pre><code>{{ dependencyCode }}</code></pre>
    <h3>App Config</h3>
    <pre><code>{{ appConfigCode }}</code></pre>
    <h3>Actions</h3>
    <pre><code>{{ actionsCode }}</code></pre>
    <h3>State</h3>
    <pre><code>{{ stateCode }}</code></pre>
    <h3>Example of use of 'Select' and 'Actions'</h3>
    <pre><code>{{ examplesOfUseCode }}</code></pre>
  `,
})
export class NgxsComponent extends AbstractCourseComponent {
  protected dependencyCode = `
$ ng add @ngxs/store
=>
  package.json
  "@ngxs/store": "^21.0.0"
  `;
  protected appConfigCode = `
...
import {NgxsModuleOptions, provideStore} from '@ngxs/store';
import {UserState} from './state/user/user.state';

export const STATES_MODULES = [
  UserState,
];

export const OPTIONS_CONFIG: NgxsModuleOptions = {
  /**
   * Run in development mode. This will add additional debugging features:
   * import { environment } from '@env';
   * developmentMode: !environment.production
   */
  developmentMode: true,
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideStore(
      [],
    ),
    provideStore(STATES_MODULES, OPTIONS_CONFIG),
  ]
};

  `;
  protected actionsCode = `
import {UserData} from '../../users/models/user-data';

export class InitUser {
  public static readonly type = '[User] Init user';
}

export class ConnectUser {
  public static readonly type = '[User] Connect User';

  constructor(public user: UserData) {
  }
}
  `;
  protected stateCode = `
import {UserData} from '../../users/models/user-data';
import {Action, NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import {ConnectUser, InitUser} from './user.actions';
import {of, tap} from 'rxjs';
import {inject} from '@angular/core';
import {UserService} from '../../users/services/user.service';

export interface UserStateModel {
  user: UserData | undefined;
}

@State<UserStateModel>({
  name: 'UserState',
  defaults: {
    user: undefined
  },
})
export class UserState implements NgxsOnInit {
  private userService = inject(UserService);

  @Selector()
  public static getUser(state: UserStateModel) {
    return state.user;
  }

  public ngxsOnInit(ctx: StateContext<UserStateModel>): void {
    ctx.dispatch(InitUser);
  }

  @Action(InitUser)
  public initUser(ctx: StateContext<UserStateModel>) {
    if (ctx.getState().user?.fullName) {
      return of(ctx.getState().user);
    }
    const connectedUserEmail = sessionStorage.getItem('connectedUserEmail');
    return this.userService.getUserByEmail(connectedUserEmail).pipe(
      tap(user => {
        ctx.patchState({user});
      }),
    );
  }

  @Action(ConnectUser)
  public connectUser(
    {patchState}: StateContext<UserStateModel>,
    action: ConnectUser
  ) {
    patchState({user: action.user});
  }
}


`;
  protected examplesOfUseCode = `
# UserService
import {inject, Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {UserState} from '../../state/user/user.state';

@Injectable({
  providedIn: 'root'
})
export class AccountManagerService {
  private userService = inject(UserService);
  private readonly store = inject(Store);

  public getConnectedUser() {
    return this.store.select(UserState.getUser);
  }

  public login(loginData: LoginData) {
    return this.getUserByEmail(loginData.email)
      .pipe(
        tap(user => {
          if (user) {
            this.store.dispatch(new ConnectUser(user));
            this.userService.addUser(user);
            sessionStorage.setItem('connectedUserEmail', user.email);
          }
        })
      );
  }
}

# account.component.ts

import {Component, inject, Signal} from '@angular/core';
import {Field, form} from '@angular/forms/signals';
import {UserData} from '../users/models/user-data';
import {LoginData} from './models/login-data';
import {AccountManagerService} from './services/account-manager.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  imports: [
    Field
  ],
  styleUrls: ['account.component.scss']
})
export class AccountComponent {
  protected user$: Signal<UserData | undefined>;
  private accountManagerService = inject(AccountManagerService);
  private router = inject(Router);
  private signupModel = signal<LoginData>({
    email: '',
    password: '',
  });
  protected loginForm = form(this.signupModel);

  constructor() {
    this.user$ = toSignal(this.accountManagerService.getUser(), {requireSync: true});
  }

  protected login() {
    const value: LoginData = this.loginForm().value();
    this.loginManagerService.login(value)
      .subscribe(res => {
        if (res) {
          this.router.navigate(['./product']);
        }
      })
  }
}


`;
}
