import { EventEmitter, Injectable } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingridientChange = new EventEmitter<Ingridient[]>();
  private ingridients:Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Grapes', 12),
  ];

  constructor() { }

  getIngridients(){
    return this.ingridients.slice();
  }

  addIngridient(ingridient:Ingridient){
    this.ingridients.push(ingridient);
    this.ingridientChange.emit(this.ingridients.slice());
  }

  addIngridients(ingridients:Ingridient[]){
    this.ingridients = [...this.ingridients,...ingridients]
    this.ingridientChange.emit(this.ingridients.slice());
  }
}
