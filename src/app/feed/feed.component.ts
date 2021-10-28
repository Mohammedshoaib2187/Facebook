import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private router:Router,private user:UserService) { 
    var token=localStorage.getItem("access_token")
    if(token==undefined)
    {
      this.router.navigate(["/login"])
    }
  }

  ngOnInit(): void {
  }

}
