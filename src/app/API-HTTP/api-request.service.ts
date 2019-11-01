import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { User } from "../user";
import { resolve } from "q";

@Injectable({
  providedIn: "root"
})
export class ApiRequestService {
  user: User = new User("", "");

  constructor(private http: HttpClient) {}

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
        .then(response => {
          this.reposResponse = Array.from(response);

          resolve();
        });
    });
    console.log(this.reposResponse);

    return this.reposResponse;
  }
}
