import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const baseUrl = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private loggedIn = false;
  // private token: string;
  private user_id: string;

  constructor(private http: HttpClient) { }

  // setLoggedIn(loggedIn: boolean, token?: string) {
  setLoggedIn(loggedIn: boolean, user_id?: string) {
    this.loggedIn = loggedIn;
    // this.token = token;
    this.user_id = user_id;
  }

  request(method: string, route: string, data?: any) {
    if (method === 'GET') {
      return this.get(route, data);
    }

    // const header = (this.loggedIn) ? { Authorization: `Bearer ${this.token}`} : undefined;

    return this.http.request(method, baseUrl + route, {
      body: data,
      responseType: 'json',
      observe: 'body',
      // headers: header
    });
  }

  get(route: string, data?: any) {
    // const header = (this.loggedIn) ? {Authorization : `Bearer ${this.token}`} : undefined;
    let params = new HttpParams();
    if (data !== undefined) {
      Object.getOwnPropertyNames(data).forEach(key => {
        params = params.set(key, data[key]);
      });
    }

    return this.http.get(baseUrl + route, {
      responseType: 'json',
      // headers: header,
      params
    });
  }
}
