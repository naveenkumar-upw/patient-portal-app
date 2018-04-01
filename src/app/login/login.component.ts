import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';
import { LoginUserDetail } from '../model/LoginUserDetail';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginUserDetail = {
                            username : '',
                            password :''
                          };
  loading = false;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.loginService.login(this.model)
        .subscribe(
            data => {
              this.loading = false;
                //this.router.navigate([this.returnUrl]);
            },
            error => {
               // this.alertService.error(error);
                this.loading = false;
            });
  }
}
