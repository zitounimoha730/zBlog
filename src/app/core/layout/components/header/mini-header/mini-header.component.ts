import {ChangeDetectionStrategy, Component, ViewEncapsulation,} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'zblog-mini-header',
  imports: [
    ReactiveFormsModule,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './mini-header.component.html',
  styleUrl: './mini-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MiniHeaderComponent {

}
