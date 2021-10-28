import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { login,user,register1,response,SingleUser } from './modal';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  login(data:login){
    return this.http.post<response>("https://facebookserverapi.herokuapp.com/user-login",data,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    })
  }
  register(data:register1){
    return this.http.post("https://facebookserverapi.herokuapp.com/user-register",data,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    })
  }

  getUsers(){
    return this.http.get<Array<SingleUser>>("https://facebookserverapi.herokuapp.com/all-users",{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    })
  }

  addFriend(data : number,id:number){
    var maindata={"friendid":data, "userid" : id}
    return this.http.post("https://facebookserverapi.herokuapp.com/add-friend",maindata,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    })
  }

  getUsersById(id : number,data :user){
    return this.http.post(`https://facebookserverapi.herokuapp.com/user-edit/${id}`,data,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    })
  }
  getUserById(id : number){
    return this.http.get<Array<SingleUser>>(`https://facebookserverapi.herokuapp.com/one-user/${id}`,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    })
  }
}
