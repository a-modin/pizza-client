import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service';
import { AuthService } from '../../services/auth.service';

import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.styl']
})
export class IngredientsComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(
    private ingredientsService: IngredientsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.ingredientsService.getData().then((ingredients: Ingredient[])  => {
      this.ingredients = ingredients;
    });
  }

  exit() {
    this.authService.logout();
  }

}
