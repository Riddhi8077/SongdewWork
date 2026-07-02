import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginApi = 'https://orbit.songdew.com/apis/obtain_auth_token/';
  
  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    const body = {
      email: email,
      password: password,
      source: "web"
    };

    return this.http.post(this.loginApi, body);
  }

}