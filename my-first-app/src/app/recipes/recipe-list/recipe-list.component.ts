import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
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
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }


}
