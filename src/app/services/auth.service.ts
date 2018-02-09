import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  accessToken: string;

  constructor(
    private http: Http,
    private router: Router,
  ) {}

  login(login, pass) {
    const promise = new Promise((resolve, reject) => {
      this.http.post('/api/auth', { login, pass }).subscribe(res => {
        resolve(res['_body']);

      }, (err) => {
        reject(err);
      });
    });

    return promise;
  }

  logout() {    
    localStorage.removeItem('token');
    this.router.navigate(['./login']);
  }

  getAccessToken() {
    let accessToken: string;

    if (this.accessToken) {
      return this.accessToken;
    };

    accessToken = localStorage.getItem('token');

    if (accessToken) {
      this.accessToken = accessToken;
      return this.accessToken;
    };

    return null;
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
    localStorage.setItem('token', accessToken);
  }
}
