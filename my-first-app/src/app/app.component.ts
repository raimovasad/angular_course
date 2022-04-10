import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {
  counter:{active:number, inactive:number};

  constructor(private counterService:CounterService){
  }

  ngOnInit(): void {
    this.counter = {
      active: this.counterService.getActiveCounter(),
      inactive: this.counterService.getInactiveCounter()
    };
  }

  getCounter(){
    this.counter = {
      active: this.counterService.getActiveCounter(),
      inactive: this.counterService.getInactiveCounter()
    };
  }





}
