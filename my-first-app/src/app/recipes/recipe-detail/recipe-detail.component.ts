import { Component, Input, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
  }

  addToShopping(){
    this.shoppingService.addIngridients(this.recipe.ingridients);
  }

}
