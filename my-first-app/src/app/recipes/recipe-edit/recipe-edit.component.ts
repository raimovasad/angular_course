import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  recipe:Recipe;
  editMode=false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params
    .subscribe((params:Params)=>{
      this.editMode = params['id'] != null;
    })
  }

}
