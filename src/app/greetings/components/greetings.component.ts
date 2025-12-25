import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'zblog-greetings',
  imports: [ ],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreetingsComponent {}
