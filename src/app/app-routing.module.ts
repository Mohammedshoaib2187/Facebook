import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FeedComponent } from './feed/feed.component';
import { AllusersComponent } from './allusers/allusers.component';
import { FriendsComponent } from './friends/friends.component';
import { ProfileComponent } from './profile/profile.component';
import { AddpostComponent } from './addpost/addpost.component';
import { MypostsComponent } from './myposts/myposts.component';


const routes: Routes = [
  {
    path:"login",
    component: LoginComponent,
  },
  {
    path:"register",
    component: RegisterComponent,
  },
  {
    path:"",
    component: FeedComponent,
  }
  ,{
    path:"allusers",
    component: AllusersComponent,
  },
  {
    path:"friends",
    component: FriendsComponent,
  },
  {
    path:"profile",
    component: ProfileComponent,
  },
  {
    path:"addpost",
    component: AddpostComponent,
  },
  {
    path:"myposts",
    component: MypostsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
