import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingridients:Ingridient[] = [];
  private subscription: Subscription;
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
    this.ingridients = this.shoppingService.getIngridients();
   this.subscription = this.shoppingService.ingridientChange.subscribe((ingridients:Ingridient[]) => {
      this.ingridients = ingridients;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()

  }



}
