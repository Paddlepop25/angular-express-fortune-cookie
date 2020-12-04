import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieServiceToCallBackend } from './cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  fortuneCookieForm: FormGroup
  
  constructor(private fb: FormBuilder, private cookieSvc: CookieServiceToCallBackend) {}

  ngOnInit() {
    this.fortuneCookieForm = this.fb.group({
      numberOfCookies: this.fb.control(1)
    })
  }

  // async getCookies() {
  //   const numOfCookies = parseInt(this.fortuneCookieForm.value['numberOfCookies'])
  //   // console.log("🍪", numOfCookies)
  //   let fortuneCookies = await this.cookieSvc.getCookies()
  //   console.log(fortuneCookies)
  // }

}
