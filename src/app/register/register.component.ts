import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { SingleUser } from '../modal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userList:Array<SingleUser> = [];
  registerForm : FormGroup;
  imageData : string ="";
  constructor(private router:Router,private user:UserService) {
    this.registerForm = new FormGroup({
      "email" : new FormControl('',[Validators.required, Validators.email]),
      "password" : new FormControl('',Validators.required),
      "type" : new FormControl('',Validators.required),
      "username" : new FormControl('',Validators.required)
    })
   }
  ngOnInit(): void {
    this.getUsers()
  }
    selectedFile=null;
  // onFileSelect(event: Event) {
  //   if((event.target as HTMLInputElement).files)
  //   {
  //   const file = (event.target as HTMLInputElement).files[0] ;
  //   this.registerForm.patchValue({ image: file });
  //   const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.imageData = reader.result as string;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }
 
  getUsers(){
    this.user.getUsers().subscribe((data) => {
      this.userList = data
      console.log(data)
    },(err) => {
      console.log(err)
    })
  }

  submit(){
    console.log(this.registerForm.value)
    if(this.checkUser() && this.checkEmail()){
      this.user.register(this.registerForm.value).subscribe((data)=>{
        this.router.navigate(['/login'])
      },(err)=>{
        console.log("Error")
        alert("Please enter correct email/password")
      })
    }
    else{
      alert("username or email id already present")
    }
  }

  checkUser(){
    var flag=0
    var val=this.registerForm.value
    console.log(val["username"])
    for(var i=0;i<this.userList.length;i++){
      if(this.userList[i]["username"]==val["username"]){
        flag=1
      }
    }
    if(flag==1){
      return false
    }
    else{
      return true
    }
  }
  checkEmail(){
    var flag=0
    var val=this.registerForm.value
    console.log(this.userList[0]["email"]===val["email"])
    console.log(this.userList[0]["email"]==val["email"])
    for(var i=0;i<this.userList.length;i++){
      if(this.userList[i]["email"]===val["email"]){
        flag=1
      }
    }
    if(flag==1){
      return false
    }
    else{
      return true
    }
  }
}
