import {AfterViewInit, Component} from '@angular/core';
import {AbstractCourseComponent} from '../../abstract-course.component';
import hljs from 'highlight.js';

@Component({
  selector: 'zblog-kafka-stream-execution',
  imports: [],
  styleUrls: ['./kafka-stream-execution.component.scss'],
  templateUrl: 'kafka-stream-execution.component.html'
})
export class KafkaStreamExecutionComponent extends AbstractCourseComponent implements AfterViewInit {
  public ngAfterViewInit() {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el as unknown as HTMLElement);
    });
  }
}
