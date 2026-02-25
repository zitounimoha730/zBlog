import {AfterViewInit, Component} from '@angular/core';
import {AbstractCourseComponent} from '../../abstract-course.component';
import hljs from 'highlight.js';

@Component({
  selector: 'zblog-topics-delete-and-compaction',
  imports: [],
  styleUrls: ['./topics-delete-and-compaction.component.scss'],
  templateUrl: 'topics-delete-and-compaction.component.html'
})
export class TopicsDeleteAndCompactionComponent extends AbstractCourseComponent implements AfterViewInit {
  public ngAfterViewInit() {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el as unknown as HTMLElement);
    });
  }
}
