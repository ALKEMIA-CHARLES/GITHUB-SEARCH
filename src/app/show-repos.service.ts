import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../environments/environment";
import { Repository } from "../app/repository";

@Injectable({
  providedIn: "root"
})
export class ShowReposService {
  http:HttpClient;allrepos :Repository[]
  constructor(http: HttpClient) {
    this.http = http;
  }

  username: string;

  // fetchRepos(userToFetch:string) {
  //   interface UserReposResponse {
  //     repos: Repository[]
  //     name: string;
  //     html_url: string;
  //   }

  //   let promise = new Promise((resolve, reject) => {
  //     this.http
  //       .get<UserReposResponse>(
  //         "https://api.github.com/users/" +
  //         userToFetch +
  //         "/repos?access_token=" +
  //         environment.token
  //       )
  //       .toPromise()
  //       .then(response => {
  //         console.log(response);
  //         this.repository.name = response.name;
  //         this.repository.html_url = response.html_url

  //         console.log(this.repository);

  //       });
  //   });

  getRepos() {
    return this.http.get(
      "https://api.github.com/users/" +
        this.username +
        "/repos?access_token=" +
        environment.token
    );
  }

  searchUser(username) {
    this.username = username;
  }
  // console.log(this.repository);

  // return this.repository;
  // }
}
