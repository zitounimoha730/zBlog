import {AfterViewInit, Component} from '@angular/core';
import {AbstractCourseComponent} from '../../abstract-course.component';
import hljs from 'highlight.js';

@Component({
  selector: 'zblog-kafka-rebalance-offsets-streams',
  imports: [],
  styleUrls: ['./kafka-rebalance-offsets-streams.component.scss'],
  templateUrl: 'kafka-rebalance-offsets-streams.component.html'
})
export class KafkaRebalanceOffsetsStreamsComponent extends AbstractCourseComponent implements AfterViewInit {
  public ngAfterViewInit() {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el as unknown as HTMLElement);
    });
  }
}
