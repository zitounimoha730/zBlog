import {AfterViewInit, Component} from '@angular/core';
import {AbstractCourseComponent} from '../abstract-course.component';
import hljs from 'highlight.js';

@Component({
  selector: 'zblog-java25',
  imports: [],
  template: `
    <h3>Java 25</h3>
    <h4>Module Import Declarations (JEP 511 - Preview)</h4>
    <pre><code class="java">{{ code1 }}</code></pre>
    <h4>Coalesced Module Imports</h4>
    <pre><code class="java">{{ code2 }}</code></pre>
    <h4>Compact Source Files (JEP 512) and Instance Main Methods</h4>
    <pre><code class="java">{{ code3 }}</code></pre>
  `,
})
export class Java25Component extends AbstractCourseComponent implements AfterViewInit {
  public ngAfterViewInit() {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el as unknown as HTMLElement);
    });
  }

  protected code1 = `
import module java.base;
import module java.sql;

import java.sql.Date;

public class Main {
    public static void main(String[] args) {
        Date d = Date.valueOf("2025-06-15");
        System.out.println("Resolved Date: " + d);
    }
}
  `;

  protected code2 = `
// These imports could be coalesced:
import javax.xml.*; 
import javax.xml.parsers.*; 
import javax.xml.stream.*;

// Instead, just use:
import module java.xml;
`;

protected code3 = `
void main() {
    System.out.println("Hello from Java 25!");
}

void main() {
    IO.println("Hello, World!");
}

// The IO class provides simplified I/O methods:
public static void print(Object obj);
public static void println(Object obj);
public static void println();
public static String readln(String prompt);
public static String readln();
 `;
}
