import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { SingleUser } from '../modal';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  updateForm : FormGroup;
  constructor(private router:Router,private user:UserService) { 
    this.updateForm = new FormGroup({
      "email" : new FormControl('',[Validators.required, Validators.email]),
      "password" : new FormControl('',Validators.required),
      "type" : new FormControl('',Validators.required),
      "username" : new FormControl('',Validators.required)
    })
  }
  userList:Array<SingleUser> = [];
  id : number = parseInt(localStorage.getItem("user_id") || "0" ) 

  ngOnInit(): void {
    this.getUsers(this.id)
  }

  getUsers(userid : number){
    console.log(this.updateForm.value)
    this.user.getUsersById(userid,this.updateForm.value).subscribe((data) => {
      console.log(data)
      alert("user data upadted")
    },(err) => {
      console.log(err)
    })
  }

}
