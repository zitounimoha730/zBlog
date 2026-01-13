import {AfterViewInit, Component} from '@angular/core';
import {AbstractCourseComponent} from '../abstract-course.component';
import hljs from 'highlight.js';

@Component({
  selector: 'zblog-design-patterns',
  imports: [],
  template: `
    <h3>Design Patterns</h3>
    <p>some examples of design patterns</p>
  `,
})
export class DesignPatternsComponent extends AbstractCourseComponent implements AfterViewInit {
  public ngAfterViewInit() {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el as unknown as HTMLElement);
    });
  }
}
