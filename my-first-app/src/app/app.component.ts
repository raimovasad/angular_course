import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  components = [];

  onStartGame(counter) {
    console.log(counter);
    this.components.push(counter);
  }



}
