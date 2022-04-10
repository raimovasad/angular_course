import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})

export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
  }


  onAddIngridient(){
    // console.log(this.nameInputRef.nativeElement.value);
    // console.log(this.amountInputRef.nativeElement.value);
    const ingridientName = this.nameInputRef.nativeElement.value;
    const ingridientAmount = this.amountInputRef.nativeElement.value;
    this.shoppingService
      .addIngridient(
        new Ingridient(ingridientName, ingridientAmount)
      )
  }

  }

