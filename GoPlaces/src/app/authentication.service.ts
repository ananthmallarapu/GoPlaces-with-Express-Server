import { Injectable } from '@angular/core';
import { Http } from "@angular/http"


@Injectable()
export class AuthenticationService {

  constructor(
    private http: Http
  ) {

  }
  submitUser(user) {
    let url =  "/users"
    return this.http.post(url, user)
  }
  verifyUser(user) {
    let url = "/login"
    return this.http.post(url, user)
  }

}
