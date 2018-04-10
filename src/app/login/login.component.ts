import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../service/login/login.service';
import { LoginUserDetail } from '../model/LoginUserDetail';

@Component({
  //selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl : string = 'home';
  model: LoginUserDetail = {
                            username : '',
                            password :''
                          };
  loading = false;
  constructor(private router: Router, private loginService:LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.loginService.login(this.model)
        .subscribe(
            data => {
              if(data.token)
                this.router.navigate([this.returnUrl]);
                this.loading = false;
            },
            error => {
               // this.alertService.error(error);
                this.loading = false;
            });
  }
}
