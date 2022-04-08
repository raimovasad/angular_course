import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

  onServerAdded(elem: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: elem.serverName,
      content: elem.serverContent
    });
  }

  onBlueprintAdded(elem: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: elem.serverName,
      content: elem.serverContent
    });
  }

}
