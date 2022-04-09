import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})

export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  @Output() newIngridient = new EventEmitter<Ingridient>();
  constructor() { }

  ngOnInit(): void {
  }


  onAddIngridient(){
    console.log(this.nameInputRef.nativeElement.value);
    console.log(this.amountInputRef.nativeElement.value);
    this.newIngridient.emit(
      new Ingridient(
        this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value
        )
      );
  }

  }

