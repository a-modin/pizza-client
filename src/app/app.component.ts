import { Component } from '@angular/core';
import { Router }    from '@angular/router';


import { IngredientsService } from './services/ingredients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private ingredientsService: IngredientsService,
    private router: Router
  ) {
    this.router.navigate(['./ingredients']);
  }
}
