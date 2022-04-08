import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://i.pinimg.com/originals/b3/23/08/b3230875aedd5cdadcee0e3dfa433a33.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://i.pinimg.com/originals/b3/23/08/b3230875aedd5cdadcee0e3dfa433a33.jpg'
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
