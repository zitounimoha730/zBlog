import {AfterViewInit, Component} from '@angular/core';
import hljs from 'highlight.js';
import {AbstractCourseComponent} from '../../abstract-course.component';

@Component({
  selector: 'zblog-util-commands',
  imports: [],
  template: `
    <h2>Commandes Utils</h2>
    <h3>Commandes ligne pour Windows Powershell</h3>
    <h4>Rechercher dans l'historique des commandes</h4>
    <pre><code>{{searchScriptCode}}</code></pre>
    <h4>Rechercher un mot clé dans un log d'une commande</h4>
    <pre><code>docker logs broker-1 | Select-String "Coordinator"</code></pre>
  `,
})
export class UtilCommandsComponent extends AbstractCourseComponent implements AfterViewInit {

  protected searchScriptCode = `
function zhistory {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Pattern
    )

    $historyPath = (Get-PSReadLineOption).HistorySavePath

    Get-Content $historyPath |
        Select-String -Pattern $Pattern -CaseSensitive:$false |
        ForEach-Object {
            "{0,6}  {1}" -f $_.LineNumber, $_.Line
        }
}

$ zhistory 'docker logs'
5490  docker logs broker-1
5491  docker logs broker-3
5499  docker logs broker-1 | Select-String "Coordinator"
5500  docker logs broker-2 | Select-String "Coordinator"
....
  `;
  public ngAfterViewInit() {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el as unknown as HTMLElement);
    });
  }
}
