import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { PostService } from '../post.service';
import { SingleUser,getData } from '../modal';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {

  constructor(private router:Router,private user:UserService,private post:PostService) { }

  posts : Array<getData> =[]

  friendsList : Array<SingleUser> = []

  id : number = parseInt(localStorage.getItem("user_id") || "0" ) 

  ngOnInit(): void {
    this.getDetails()
    this.getposts()
  }

  getDetails()
  {
    this.user.getUserById(this.id).subscribe((data) => {
      this.friendsList=data
      console.log(data)
    },(err) => {
      console.log(err)
    })
  }

  getposts()
  {
    this.post.getposts().subscribe((data) => {
      this.posts = data
      console.log(data)
    },(err) => {
      console.log(err)
    })
  }

}
