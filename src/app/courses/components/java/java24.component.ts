import {AfterViewInit, Component} from '@angular/core';
import {AbstractCourseComponent} from '../abstract-course.component';
import hljs from 'highlight.js';

@Component({
  selector: 'zblog-java24',
  imports: [],
  template: `
    <h3>Java 24</h3>
    <p>.....</p>
  `,
})
export class Java24Component extends AbstractCourseComponent implements AfterViewInit {
  public ngAfterViewInit() {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el as unknown as HTMLElement);
    });
  }

}
