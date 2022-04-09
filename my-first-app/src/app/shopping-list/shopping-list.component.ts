import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingridients:Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Grapes', 12),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onPushIngridient(ingridient:Ingridient){
    this.ingridients.push(ingridient);
  }

}
