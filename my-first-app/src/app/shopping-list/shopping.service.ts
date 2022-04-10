import { Injectable } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
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
    console.log(this.ingridients);
  }
}
