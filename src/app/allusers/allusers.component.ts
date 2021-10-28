import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { SingleUser } from '../modal';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  
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
  addFriend(userid : number){
    // for(var i=0;i<this.userList.length;i++)
    // {
    //   if(this.userList[i]['userid']!=this.id && this.userList[i]['type']=="public" && this.userList[i]['userid']==userid)
    //   {
        this.user.addFriend(userid,this.id).subscribe((data)=>{
          alert("Friend added Successfully")
          location.reload();
        },(err)=>{
          console.log(err)
          alert("Friend not added")
        })
        
    //   }
    // }
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
    if(flag==0)
    {
      return true
    }
    else{
      return false
    }
  }
}
