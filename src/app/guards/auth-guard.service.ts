import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service'


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
  ){}

  canActivate() {
    let promise: Promise<boolean> = new Promise((resolve, reject) => {
      const token = this.authService.getAccessToken();

      if (token) {
        resolve(true);

      } else {
        this.router.navigate(['./login']);
        resolve(false);
      }

    }); 

    return promise
  }
}