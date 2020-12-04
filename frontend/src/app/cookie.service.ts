import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";

// const SERVER = 'http://localhost:3000/api/cookie'
const SERVER = '/api/cookie'

export interface FortuneCookie {
  cookie: string;
}

@Injectable()

export class CookieServiceToCallBackend {

  constructor(private http: HttpClient) {}

  // make httpcall to express: follow it's "get, resource, query string"
  async getCookies(defaultCookie = 1): Promise<FortuneCookie[]> {

    // query string
    const params = new HttpParams().set('count', defaultCookie.toString()) // or `${defaultCookie}` (number has to be string)

    // construct the call: must match the calls between server and client
    // this.http.get ANY because one returns 1 cookie and another returns an array of cookies
    let response = await this.http.get<any>(SERVER, { params: params })
      .toPromise()

    if (defaultCookie == 1) 
      return [ response as FortuneCookie ] // we need array (because Promise<FortuneCookie[]) hence [ ]
    return response as FortuneCookie[] // otherwise it is an array already so FortuneCookie[]
  }
}