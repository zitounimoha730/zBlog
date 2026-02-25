import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MenuBottomComponent } from '@core/layout/components/menu/menu-bottom/menu-bottom.component';

describe('MenuBottomComponent', () => {
  let component: MenuBottomComponent;
  let spectator: Spectator<MenuBottomComponent>;

  const createComponent = createComponentFactory({
    component: MenuBottomComponent,
    declarations: [],
    mocks: [],
    providers: [],
    imports: [],
  });

  beforeEach(() => {
    spectator = createComponent({
      props: {
        version: '1',
        isDarkMode: false,
        isMenuOpened: false,
        items: [],
      },
      detectChanges: false,
    });
    component = spectator.component;
    spectator.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
