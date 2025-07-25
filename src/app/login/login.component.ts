import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private backendService : BackendService, private fb : FormBuilder,private route: Router){
      this.logIn=fb.group({
        username : fb.control('',[Validators.required,Validators.minLength(4),Validators.pattern('^[a-zA-z0-9]+$')]),
        password : fb.control('',[Validators.required,Validators.minLength(8)])
      })
    }
inputUser='';
logIn: FormGroup;
username: string ="enter your username";
password: string ="enter your password";


onSignUp(){
 if(this.logIn.valid){
    let obj={
      "username" : this.logIn.value.username,
      "password" : this.logIn.value.password,
      "email" : this.logIn.value.username+ '@abc.com'
    }
    this.backendService.updateUserData(obj).subscribe((response)=>{
      console.log("user data updated sucessfully");
    })
console.log("this is the form data stored", obj);
}
else{
  console.warn("please enter valid values");
}
}

onSubmit(myForm : FormGroup){
  if(myForm.valid){
    let obj={
      "username" : this.logIn.value.username,
      "password" : this.logIn.value.password,
      "email" : this.logIn.value.username+ '@abc.com'
    }
    this.backendService.userInput$.next(obj);
}
else{
  console.warn("please enter valid values");
}
}
ngOnInit(): void {
  let data={}
        this.backendService.getUserData(data).subscribe({
          next: (response)=>{
              console.log("this is the flag value",response.flag);
              if(response.flag){
                alert('logged in successfully');
                this.route.navigate(['/home'])
              }
              else{
                alert('invalid username or password')
              }
          }
        })
  }
}
