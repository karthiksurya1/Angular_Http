import { Component } from '@angular/core';
import { FreeApiService } from './services/free-api.service';
import { Comments } from './classes/comments';
import { Postparam } from './classes/postparam';
import { Postnewparam } from './classes/postnewparam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Http-post';
  listcomments:Comments[];
  listpostparam:Postparam[];
  listmypost:Postparam;
  listmypostnew:Postnewparam[];

  constructor(private _freeApiservice:FreeApiService){

  }
  ngOnInit(){
    this._freeApiservice.getcomments()
    .subscribe(data=>{this.listcomments=data});

    this._freeApiservice.getcommentswithparam()
    .subscribe(data=>this.listpostparam=data);

    var opost=new Postparam();

    opost.body="testbody";
    opost.title="testtile";
    opost.userId=5;

    this._freeApiservice.mypost(opost)
    .subscribe(data=>{this.listmypost=data});

    this._freeApiservice.mypost(opost)
    .subscribe(data=>{this.listmypostnew=data});
  }


}
