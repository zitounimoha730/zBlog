import {AfterViewInit, Component} from '@angular/core';
import {AbstractCourseComponent} from '../../abstract-course.component';
import hljs from 'highlight.js';

@Component({
  selector: 'zblog-kafka-partitions-groups',
  imports: [],
  styleUrls: ['./kafka-patitions-groups.component.scss'],
  templateUrl: 'kafka-patitions-groups.component.html'
})
export class KafkaPatitionsGroupsComponent extends AbstractCourseComponent implements AfterViewInit {
  public ngAfterViewInit() {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el as unknown as HTMLElement);
    });
  }
}
