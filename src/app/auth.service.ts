import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(username:string, password:string){

    let url =  environment.API_URL + "login";
    let data = { username: username, password: password};
    return this.http.post(url, data);
  }

  register(username:string, password:string){

    let url =  environment.API_URL + "register";
    let data = { username: username, password: password};
    return this.http.post(url, data);
  }
}
