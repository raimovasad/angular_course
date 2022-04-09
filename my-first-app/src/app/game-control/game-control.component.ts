import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  gameStart = false;
  counter = 1;
  timerRef: any;
  @Output('gameStarted') gameStarted = new EventEmitter<number>();
  @Input('gameArray') components;
  constructor() { }

  ngOnInit(): void {
    console.log(this.components);
  }

  startGame() {
    this.gameStart=true;
    this.timerRef = setInterval(()=> {
      this.gameStarted.emit(this.counter);
      this.counter += 1;
    },1000)

  }

  stopGame() {
    clearInterval(this.timerRef);
    this.gameStart=false;
  }

}
