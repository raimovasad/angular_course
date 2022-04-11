import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

@ViewChild('f') signupForm:NgForm;
subscriptions = ['Basic','Advanced','Pro'];
 deafaultSubscription = 'Advanced';
 submitted = false;
 user={
    email:'',
    subscription:'',
    password:''
 }




  onSubmit(){
    this.submitted = true;
    console.log(this.signupForm);
    this.user.email = this.signupForm.value.userData.email;
    this.user.password = this.signupForm.value.userData.password;
    this.user.subscription = this.signupForm.value.subscription;
  }
}
