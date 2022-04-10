import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeCounter = 0;
  inactiveCounter = 0;
  constructor() { }

  activeIncrement() {
    this.activeCounter++;
    console.log('Inactive to active ' + this.activeCounter);
    console.log('Active to inactive ' + this.inactiveCounter);
  }

  inactiveIncrement() {
    this.inactiveCounter++;
    console.log('Inactive to active ' + this.activeCounter);
    console.log('Active to inactive ' + this.inactiveCounter);
  }

  getActiveCounter() {
    return this.activeCounter;
  }
  getInactiveCounter() {
    return this.inactiveCounter;
  }

}
