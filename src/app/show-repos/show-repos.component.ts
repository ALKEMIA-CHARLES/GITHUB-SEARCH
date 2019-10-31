import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../API-HTTP/api-request.service'
import {Repository} from '../repository'

@Component({
  selector: 'app-show-repos',
  templateUrl: './show-repos.component.html',
  styleUrls: ['./show-repos.component.css']
})
export class ShowReposComponent implements OnInit {
repository:Repository


  constructor(private apiRequestInstance: ApiRequestService) { }

  ngOnInit() {
    this.repository = this.apiRequestInstance.fetchRepos();
    console.log(this.repository)
  }

}
