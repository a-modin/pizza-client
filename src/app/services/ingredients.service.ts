import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthService } from './auth.service';
import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class IngredientsService {

  private ingredients: Ingredient;

  constructor(
    private http: Http,
    private authService: AuthService
  ) {}

  getData() {
    const promise = new Promise((resolve, reject) => {
      const accessToken = this.authService.getAccessToken();

      this.http.get(`/api/data?accessToken=${accessToken}`).subscribe((res) => {
        this.ingredients = JSON.parse(res["_body"]);
        resolve(this.ingredients);

      }, err => {
        reject(err);
      });

    });

    return promise;
  }

}



