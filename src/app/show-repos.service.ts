import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../environments/environment";
import{Repository} from "../app/repository";


@Injectable({
  providedIn: 'root'
})
export class ShowReposService {
  repository: Repository;
  constructor(private http: HttpClient) {

   }

  fetchRepos(userToFetch:string) {
    interface UserReposResponse {
      repos: Repository[]
      name: string;
      html_url: string;
    }

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<UserReposResponse>(
          "https://api.github.com/users/repos" +
          userToFetch +
          "?access_token=" +
          environment.token
        )
        .toPromise()
        .then(response => {
          console.log(response);

          this.repository.name = response.name;
          this.repository.html_url = response.html_url
        });
    });

    return this.repository;
  }


}
