import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Postparam } from '../classes/postparam';

@Injectable({
  providedIn: 'root'
})
export class FreeApiService {

  private _geturl:string="http://jsonplaceholder.typicode.com/posts/1/comments";
  private _geturl2:string="http://jsonplaceholder.typicode.com/posts/";

  constructor(private httpClient:HttpClient) {

   }

  getcomments():Observable<any>{
    return this.httpClient.get(this._geturl);
    //return this.httpClient.get("http://jsonplaceholder.typicode.com/posts/1/comments");
  }

  getcommentswithparam():Observable<any>{
    let params1=new HttpParams().set("userId","1");
    return this.httpClient.get(this._geturl2,{params:params1});
  }

  mypost(opost:Postparam):Observable<any>{
    return this.httpClient.post("http://jsonplaceholder.typicode.com/posts",opost);
  }
}
