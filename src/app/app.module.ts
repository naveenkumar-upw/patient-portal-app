import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomHttpInterceptor } from './interceptor/CustomHttpInterceptor';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login/login.service';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { UserDetailService } from './service/user-detail.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, routing
  ],
  providers: [
    LoginService, UserDetailService,
    {provide:HTTP_INTERCEPTORS, useClass:CustomHttpInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
