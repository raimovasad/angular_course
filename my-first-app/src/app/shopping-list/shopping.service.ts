import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingridient } from '../shared/ingridient.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingridientChange = new Subject<Ingridient[]>();
  startedEditing = new Subject<number>();
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
    this.ingridientChange.next(this.ingridients.slice());
  }

  updateIngridient(index:number, newIngridient:Ingridient){
    this.ingridients[index] = newIngridient
    this.ingridientChange.next(this.ingridients.slice());
  }

  deleteIngridient(index:number){
    this.ingridients.splice(index,1);
    this.ingridientChange.next(this.ingridients.slice());
  }

  getIngridient(index:number){
    return this.ingridients[index];
  }

  addIngridients(ingridients:Ingridient[]){
    this.ingridients = [...this.ingridients,...ingridients]
    this.ingridientChange.next(this.ingridients.slice());
  }
}
