import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  mouseroverLogin;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formValues){
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }

  cancel(){
    this.router.navigate(['events']);
  }

}
