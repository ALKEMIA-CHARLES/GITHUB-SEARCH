import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ApiRequestService } from "../API-HTTP/api-request.service";
import { User } from "../user";
import { ShowReposService } from "../show-repos.service";
import { Repository } from "../repository";

@Component({
  selector: "app-mainpart",
  templateUrl: "./mainpart.component.html",
  styleUrls: ["./mainpart.component.css"]
})
export class MainpartComponent implements OnInit {
  searchTerm: string;
  reposToShow: Repository[];
  user: User;
  repos: Repository;
  repositories: any;
  show = false;

  constructor(private apiRequestInstance: ApiRequestService) {}

  submitUsername() {
    this.user = this.apiRequestInstance.apiRequest(this.searchTerm);
    console.log(this.user);
  }

  ngOnInit() {}

  loadRepos() {
    // this.show = !this.show;
    this.apiRequestInstance.fetchRepos(this.searchTerm);
    console.log(this.searchTerm);
  }
}
