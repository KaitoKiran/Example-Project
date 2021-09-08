import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

/*

  Middleware for all API calls to use reusable functions

*/
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getCall(url, parameters, callback, errorCallback) {

    var getString = this.generateRequestBodyString(parameters, "GET")

    this.httpClient.get(url + getString, {
    headers: new HttpHeaders({
      Accept: 'application/json'
    })
  }).subscribe(
    result => {
      callback(result)
    },
    error => {
      errorCallback(error)
    });
  }

  postCall(url, parameters, callback, errorCallback) {

    this.httpClient.post(url, parameters, {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }).subscribe(
    result => {
      callback(result)
    },
    error => {
      errorCallback(error)
    });
  }

  formPostCall(url, parameters, callback, errorCallback) {
    var postString = this.generateRequestBodyString(parameters, "POST")

    let headers = {
      headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    })}

    this.httpClient.post(url, postString, headers).subscribe(
    result => {
      callback(result)
    },
    error => {
      errorCallback(error)
    });
  }

  private generateRequestBodyString(p, type: "POST" | "GET") {
    var s = ""
    for (let i = 0; i < p.length; i++) {
      if (i == 0) {
        if (type == "GET") {
          s += "?"
        }
      } else {
        s += "&"
      }
      s += p[i][0] + "=" + encodeURIComponent(p[i][1])
    }

    return s;
  }
}

