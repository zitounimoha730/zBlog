import {Component} from '@angular/core';
import {AbstractCourseComponent} from '../abstract-course.component';

@Component({
  selector: 'zblog-design-patterns',
  imports: [],
  template: `
    <h3>Design Patterns</h3>
    <p>some examples of design patterns</p>
  `,
})
export class DesignPatternsComponent extends AbstractCourseComponent {

}
