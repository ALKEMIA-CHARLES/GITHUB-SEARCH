import { Component, OnInit } from '@angular/core';
import { ShowReposService } from '../show-repos.service'
import {Repository} from '../repository'

@Component({
  selector: 'app-show-repos',
  templateUrl: './show-repos.component.html',
  styleUrls: ['./show-repos.component.css'],
})
export class ShowReposComponent implements OnInit {
repository:Repository;
  // isShow = false;

  constructor(private apiRequestInstance: ShowReposService) { }

  ngOnInit() {
    // this.repository = this.apiRequestInstance.getRepos("ibrahnerd7");
    // console.log(this.repository)
  }

  loadrepos() {

    this.repository = this.repository;
    // this.isShow = !this.isShow;
  }
}
