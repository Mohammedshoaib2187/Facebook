import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login,user,register1,response,SingleUser } from './modal';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  login(data:login){
    return this.http.post<response>("https://facebookserverapi.herokuapp.com/user-login",data)
  }
  register(data:register1){
    return this.http.post("https://facebookserverapi.herokuapp.com/user-register",data)
  }

  getUsers(){
    return this.http.get<Array<SingleUser>>("https://facebookserverapi.herokuapp.com/all-users")
  }

  addFriend(data : number,id:number){
    var maindata={"friendid":data, "userid" : id}
    return this.http.post("https://facebookserverapi.herokuapp.com/add-friend",maindata)
  }

  getUsersById(id : number,data :user){
    return this.http.post(`https://facebookserverapi.herokuapp.com/user-edit/${id}`,data)
  }
  getUserById(id : number){
    return this.http.get<Array<SingleUser>>(`https://facebookserverapi.herokuapp.com/one-user/${id}`)
  }
}
