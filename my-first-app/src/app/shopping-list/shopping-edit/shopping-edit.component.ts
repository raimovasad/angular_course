import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') shoppingForm: NgForm;
  editSubscription:Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem: Ingridient;
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
    this.editSubscription=this.shoppingService.startedEditing.subscribe((index:number)=>{
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingService.getIngridient(index);
       this.shoppingForm.setValue({
      name: this.editedItem.name,
      amount: this.editedItem.amount
    })
  })
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }

  onClear(){
    this.shoppingForm.reset()
    this.editMode = false;
  }

  onDelete(){
    this.shoppingService.deleteIngridient(this.editedItemIndex)
    this.onClear()
  }

  onAddItem(form: NgForm){
    const value = form.value;
    if(this.editMode){
      const ingridient = new Ingridient(value.name, value.amount)
      this.shoppingService.updateIngridient(this.editedItemIndex,ingridient)
    }
    else{
      this.shoppingService.addIngridient(
        new Ingridient(value.name, value.amount)
      )
    }
    this.onClear()
  }

}

