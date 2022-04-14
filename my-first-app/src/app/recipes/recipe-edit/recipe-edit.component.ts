import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  recipe:Recipe;
  editMode=false;
  recipeForm:FormGroup;
  id:number;

  constructor(
    private route: ActivatedRoute,
    private recipeService:RecipeService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.route.params
    .subscribe((params:Params)=>{
      this.editMode = params['id'] != null;
      this.id = params['id'];
      this.initForm();
    })

  }

  get controls(){
    return (<FormArray>this.recipeForm.get('ingridients')).controls
  }

  onAddIngridient(){
    let newGroup = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
    // (<FormArray>this.recipeForm.get('ingridients')).controls.push(newGroup)
    (<FormArray>this.recipeForm.get('ingridients')).push(newGroup)

  }



  private initForm(){
    let recipeName = '';
    let reicpeImagePath = '';
    let reicpeDescription= '';
    let recipeIngridients = new FormArray([])
    if(this.editMode){
      const recipe = this.recipeService.getRecipe(+this.id)
      recipeName = recipe.name;
      reicpeImagePath = recipe.imagePath;
      reicpeDescription = recipe.description;
      if(recipe.ingridients.length){
        for (let ingridient of recipe.ingridients) {
          recipeIngridients.push(
            new FormGroup({
              'name': new FormControl(ingridient.name, Validators.required),
              'amount': new FormControl(ingridient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(reicpeImagePath, Validators.required),
      'description': new FormControl(reicpeDescription, Validators.required),
      'ingridients': recipeIngridients,
    })
  }

  onCancel(){
    this.router.navigate([`../`],{relativeTo: this.route, replaceUrl: true})
  }
  

  onDeleteIngridient(index:number){
    console.log(index);
    (<FormArray>this.recipeForm.get('ingridients')).removeAt(index, {emitEvent: true})
  }

  onSubmit(){
    if(this.editMode){
      this.recipeService.updateRecipe(+this.id,this.recipeForm.value)
    }
    else{
      this.recipeService.addRecipe(this.recipeForm.value)
    }
    this.router.navigate([`../`],{relativeTo: this.route, replaceUrl: true})
  }

}
