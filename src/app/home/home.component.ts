import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '../service/user-detail.service';

@Component({
  //selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetail : any = {};
  constructor(private userDetailService:UserDetailService) { }

  ngOnInit() {
    this.userDetail = this.userDetailService.getUserDetails();
    console.log(JSON.stringify(this.userDetail));
  }
}
