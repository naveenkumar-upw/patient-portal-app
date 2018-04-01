import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomHttpInterceptor } from './interceptor/CustomHttpInterceptor';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login/login.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [
    LoginService,
    {provide:HTTP_INTERCEPTORS, useClass:CustomHttpInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
