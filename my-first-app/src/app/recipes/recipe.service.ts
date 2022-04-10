import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
 private recipes:Recipe[] = [
    new Recipe(
      'Italian Maccoroni',
      'This is simply a test',
      'https://i.pinimg.com/originals/b3/23/08/b3230875aedd5cdadcee0e3dfa433a33.jpg'
    ),
    new Recipe(
      'New Swedish Meatballs',
      'This is simply a test',
      'https://i.pinimg.com/originals/09/6f/00/096f00a0739815e14a1be086e811b0c9.jpg'
    )
  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }

}
