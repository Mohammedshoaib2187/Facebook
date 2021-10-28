import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { SingleUser } from '../modal';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private router:Router,private user:UserService) { }

  userList:Array<SingleUser> = [];
  id : number = parseInt(localStorage.getItem("user_id") || "0" ) 

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){
    this.user.getUsers().subscribe((data) => {
      this.userList = data
      console.log(data)
    },(err) => {
      console.log(err)
    })
  }
  check(userid : number)
  {
    var flag=0;
    for(var i=0;i<this.userList[this.id-1]['friends'].length;i++)
    {
      if(this.userList[this.id-1]['friends'][i]==userid)
      {
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
