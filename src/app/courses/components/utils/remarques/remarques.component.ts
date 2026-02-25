import { AfterViewInit, Component } from "@angular/core";
import { AbstractCourseComponent } from "../../abstract-course.component";
import hljs from "highlight.js";

@Component({
  selector: 'zblog-remarques',
  imports: [],
  templateUrl: './remarques.component.html',
})
export class RemarquesComponent  extends AbstractCourseComponent implements AfterViewInit {

  public ngAfterViewInit() {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el as unknown as HTMLElement);
    });
  }
}