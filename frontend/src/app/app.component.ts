import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieServiceToCallBackend, FortuneCookie } from './cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  fortuneCookieForm: FormGroup
  cookies: FortuneCookie[] = [
    { cookie: 'Press the button to get your fortune cookies 🥠'} // cookie is from the 'model' FortuneCookie
  ]
  
  constructor(private fb: FormBuilder, private cookieSvc: CookieServiceToCallBackend) {}

  ngOnInit() {
    this.fortuneCookieForm = this.fb.group({
      numberOfCookies: this.fb.control(1)
    })
  }

  async getFortuneCookies() {
    const numOfCookies = parseInt(this.fortuneCookieForm.value['numberOfCookies'])
    // console.log("🍪", numOfCookies)
    let fortuneCookies = await this.cookieSvc.getCookies(numOfCookies)
    console.log(fortuneCookies)
    this.cookies = fortuneCookies
  }

}
