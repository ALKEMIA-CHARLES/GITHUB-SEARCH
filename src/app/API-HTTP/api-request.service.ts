import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { User } from "../user";
import { Repository } from "../repository";

@Injectable({
  providedIn: "root"
})
export class ApiRequestService {
  repository: Repository;
  user: User = new User("", "");

  constructor(private http: HttpClient) {
    // this.user = new User()
    // this.repository = new Repository
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
            "/repos?access_token=" +
            environment.token
        )
        .toPromise()
        .then(response => {
          console.log(response);

          this.user.image = response.avatar_url;
          this.user.username = response.login;
        });
    });
    // console.log(this.user);

    return this.user;
  }
}