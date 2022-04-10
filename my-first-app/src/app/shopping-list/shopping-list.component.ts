import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ShoppingService]
})
export class ShoppingListComponent implements OnInit {
  ingridients:Ingridient[] = [];
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
    this.ingridients = this.shoppingService.getIngridients();
  }


}
