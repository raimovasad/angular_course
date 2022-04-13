import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  signUpForm:FormGroup;
  projectStatus = ['Stable', 'Critical', 'Finished'];

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'name': new FormControl(null,Validators.required, this.validName),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'status': new FormControl(null,Validators.required)
    })
  }

  onSubmit(){
    console.log(this.signUpForm.value);
  }

  validName(control: AbstractControl):Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const promise = new Promise((res,rej)=>{
      if(control.value == 'Test') {
        res({'nameIsForbidden':true});
      }
      res(null)
    })
    return promise
  }


}
