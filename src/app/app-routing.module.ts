import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';

import { AuthGuardService } from './guards/auth-guard.service';
import { CanActivate }    from '@angular/router';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'login',
        component: LoginComponent
      },

      {
        path: 'ingredients',
        component: IngredientsComponent,
        canActivate: [AuthGuardService]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
