import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  fortuneCookieForm: FormGroup
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.fortuneCookieForm = this.fb.group({
      numberOfCookies: this.fb.control(1)
    })
  }

  getCookies() {
    const numOfCookies = parseInt(this.fortuneCookieForm.value['numberOfCookies'])
    // console.log("🍪", numOfCookies)
  }

}
