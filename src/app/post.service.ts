import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { getData, postData } from './modal';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  addPost(data: postData,id:number,name:string){
    var maindata = { "userid" : id, "postname" : data.postname,"description" : data.description,"username":name}
    return this.http.post("https://facebookserverapi.herokuapp.com/post-insert",maindata,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    })
  }

  getposts(){
    return this.http.get<Array<getData>>("https://facebookserverapi.herokuapp.com/post-data",{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    })
  }
}
