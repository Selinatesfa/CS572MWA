import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http'
import { from } from 'rxjs';
@Injectable()
export class UserinfoService {
  private signupurl = 'http://localhost:3000/signup'
  private loginuser = 'http://localhost:3000/login'
  constructor(private http: HttpClient) { }

  signupuser(user) {
    console.log('servise singup' + user)
    return this.http.post(this.signupurl, user)

  }
  login(user) {
    console.log(user.lname)
    const myurl = this.loginuser + "/s@s.com";
    return this.http.get(myurl, user)
  }

}
