import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  showValidation: boolean = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value.login, this.loginForm.value.pass).then(token => {
      this.showValidation = false;
      this.authService.setAccessToken(token);
      this.router.navigate(['./ingredients']); 
                   
    }, err => {
      this.showValidation = true;
    });
  }
}



  
    
    

    
    