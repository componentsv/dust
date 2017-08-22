import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _result: any;

  constructor(private _http: Http) { }
  
  ngOnInit() {
    this._result = this._http.get("http://jsonplaceholder.typicode.com/posts")
      .map(response => response.json())
      .map(response => {
        let titles = '';

        for (const responseItem of response) {
          titles += responseItem['title'];
        }

        return titles;
      });
  }
}
