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
  loginInvalid = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formValues){
    this.authService.loginUser(formValues.userName, formValues.password)
      .subscribe(resp => {
        if(!resp){
          this.loginInvalid = true;
        }else{
          this.router.navigate(['events']);
        }
      });
  }

  cancel(){
    this.router.navigate(['events']);
  }

}
