import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getData, postData } from './modal';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  addPost(data: postData,id:number,name:string){
    var maindata = { "userid" : id, "postname" : data.postname,"description" : data.description,"username":name}
    return this.http.post("https://facebookserverapi.herokuapp.com/post-insert",maindata)
  }

  getposts(){
    return this.http.get<Array<getData>>("https://facebookserverapi.herokuapp.com/post-data")
  }
}
