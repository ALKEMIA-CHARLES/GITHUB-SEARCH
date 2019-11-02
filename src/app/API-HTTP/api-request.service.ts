import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { User } from "../user";
import { resolve } from "q";
import { Repository } from "../repository";

@Injectable({
  providedIn: "root"
})
export class ApiRequestService {
  user: User;
  repositories: Repository;

  constructor(private http: HttpClient) {
    this.user = new User("", "");
    this.repositories = new Repository("", "");
  }

  apiRequest(useToRequest: string) {
    interface ApiResponse {
      user: string;
      repository: string;
      login: string;
      avatar_url: string;
    }

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          "https://api.github.com/users/" +
            useToRequest +
            "?access_token=" +
            environment.token
        )
        .toPromise()
        .then(response => {
          console.log(response);

          this.user.image = response.avatar_url;
          this.user.username = response.login;
        });
    });

    return this.user;
  }

  reposResponse: any;
  fetchRepos(useToRequest) {
    interface UserReposResponse {
      name: string;
      html_url: string;
    }

    let promise = new Promise((resolve, reject) => {
      this.http
        .get(
          "https://api.github.com/users/" +
            useToRequest +
            "/repos?access_token=" +
            environment.token
        )
        .toPromise()
        .then(
          response => {
            response = this.repositories;
            console.log(response);
            // this.repositories.html_url = html_url;
            resolve();
          },
          error => {
            console.log(error);
            reject();
          }
        );
    });
    // console.log(this.reposResponse);

    return promise;
  }
}
