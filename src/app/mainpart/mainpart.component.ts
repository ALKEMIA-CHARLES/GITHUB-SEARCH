import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ApiRequestService } from "../API-HTTP/api-request.service";
import { User } from "../user";
import { ShowReposService } from "../show-repos.service";
import { Repository } from "../repository";
import { DatePipePipe} from "../date-pipe.pipe"

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
  completeDate:DatePipePipe

  constructor(private apiRequestInstance: ApiRequestService) {}

  submitUsername() {
    this.user = this.apiRequestInstance.apiRequest(this.searchTerm);
    console.log(this.user);
  }

  ngOnInit() {}

  loadRepos() {
    // this.show = !this.show;
    // this.apiRequestInstance.fetchRepos(this.searchTerm);
    console.log(this.reposToShow);
  }
}
