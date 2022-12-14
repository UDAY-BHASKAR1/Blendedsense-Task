import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  url = 'https://stage.blendedsense.com/api/login';
  url1 = 'https://stage.blendedsense.com/api/users/events';
  url2 = 'https://stage.blendedsense.com/api/users/dashboard'

  constructor(private http: HttpClient,private router:Router) { }

  getUser(user: any) {
    console.log(user)
    return this.http.post(this.url, user);
  }


  getData() {
    let params = new HttpParams();
    params = params.set('businessId', '722');
    return this.http.get(this.url1, { params: params });
  }

  getTeamData() {
    return this.http.get(this.url2)
  }

  // getsubjects(){
  //   this.router.navigate(['/subjects']);
  // }

}
