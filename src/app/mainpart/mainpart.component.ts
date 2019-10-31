import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiRequestService} from '../API-HTTP/api-request.service'
import { User } from '../user';


@Component({
  selector: 'app-mainpart',
  templateUrl: './mainpart.component.html',
  styleUrls: ['./mainpart.component.css']
})
export class MainpartComponent implements OnInit {
user:User;

  constructor(private apiRequestInstance:ApiRequestService) { }

  ngOnInit() {
   this.user= this.apiRequestInstance.apiRequest("ibrahnerd7");
   console.log(this.user);
   
  }

}
// 'https://api.github.com/users/daneden?access_token=' + 959f1108df43890ecd42fd93fff56bb1d2691044