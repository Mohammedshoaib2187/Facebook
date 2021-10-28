import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
 

  submit(){
    console.log(this.registerForm.value)
    this.user.register(this.registerForm.value).subscribe((data)=>{
      this.router.navigate(['/login'])
    },(err)=>{
      console.log("Error")
      alert("Please enter correct email/password")
    })
  }
}
