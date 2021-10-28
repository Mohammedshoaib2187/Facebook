import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { PostService } from '../post.service';
import { SingleUser,getData } from '../modal';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private router:Router,private user:UserService,private post:PostService) { }

  friendsList : Array<SingleUser> = []

  posts : Array<getData> =[]

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

  check(id1: number){
    var friend = this.friendsList[0]['friends'];

    var flag=0
    for(var j=0;j<friend.length;j++){
      if(id1== friend[j]){
        flag=1
      }
    }
    if(flag==1)
    {
      return true
    }
    else{
      return false
    }

  }



}
