import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { UserService } from '../user.service';
import { SingleUser } from '../modal';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  friendsList : Array<SingleUser> = []
  postForm : FormGroup;
  constructor(private router:Router,private post:PostService,private user:UserService) {
    this.postForm =new FormGroup({
      "postname" : new FormControl('',[Validators.required]),
      "description" : new FormControl('',Validators.required),
    })
   }

  ngOnInit(): void {
    this.getDetails()
  }

  id : number = parseInt(localStorage.getItem("user_id") || "0" ) 
  getDetails()
  {
    this.user.getUserById(this.id).subscribe((data) => {
      this.friendsList=data
      console.log(data)
    },(err) => {
      console.log(err)
    })
  }
  submit()
  {
    console.log(this.postForm.value)
    this.post.addPost(this.postForm.value,this.id,this.friendsList[0]['username']).subscribe((data)=>{
      alert("Post added Successfully")
      this.router.navigate(['/'])
    },(err)=>{
      console.log("Error")
      alert("Please enter correct email/password")
    })
  }

}
