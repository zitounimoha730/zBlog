import {AfterViewInit, Component} from '@angular/core';
import {AbstractCourseComponent} from '../abstract-course.component';
import hljs from 'highlight.js';

@Component({
  selector: 'zblog-angular20',
  imports: [],
  template: `
    <h3>Angular 20</h3>
    <p>some new features from angular 20</p>
  `,
})
export class Angular20Component extends AbstractCourseComponent implements AfterViewInit {
  public ngAfterViewInit() {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el as unknown as HTMLElement);
    });
  }

}
