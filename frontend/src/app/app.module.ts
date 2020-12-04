import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CookieServiceToCallBackend } from './cookie.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClient,
    FormsModule, ReactiveFormsModule
  ],
  providers: [CookieServiceToCallBackend],
  bootstrap: [AppComponent]
})
export class AppModule { }
