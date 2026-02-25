import {AfterViewInit, Component} from '@angular/core';
import hljs from 'highlight.js';
import {AbstractCourseComponent} from '../../abstract-course.component';

@Component({
  selector: 'zblog-architect-jargon',
  imports: [],
  templateUrl: './architect-jargon.component.html',
})
export class ArchitectJargonComponent extends AbstractCourseComponent implements AfterViewInit {

  public ngAfterViewInit() {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el as unknown as HTMLElement);
    });
  }
}
