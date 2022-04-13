import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

genders = ['male','female'];
signUpForm:FormGroup;
forbiddenUsernames = ['Chris','Anna'];

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'email': new FormControl('',[Validators.required, Validators.email],this.forbiddenEmails),
      'username': new FormControl('',[Validators.required, this.forbiddenNames.bind(this)]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })
    // this.signUpForm.valueChanges.subscribe((value)=>{
    //   console.log(value);
    // })
    this.signUpForm.statusChanges.subscribe((status)=>{
      console.log(status);
    })
    // this.signUpForm.setValue({
    //   'userData':{
    //     'username':'Max',
    //     'email':'max@test.com'
    //   },
    //   'gender': 'male',
    //   'hobbies':[]
    // })

    this.signUpForm.patchValue({
      'userData':{
        'username':'Anna',
      },

    })
  }

  onSubmit(){
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control)
  }

  getControls(){
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control:FormControl): {[s:string]:boolean}{
    if (this.forbiddenUsernames.includes(control.value)){
      return {'name':true}
    }
    return null;
  }

  forbiddenEmails(control:AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
    const promise = new Promise<any>((res,rej)=>{
      setTimeout(()=>{
        if(control.value === 'test@test.com'){
         return res({'emailIsForbidden':true})
        }
        return res(null);
      },500);
    })
    return promise;
  }
}
