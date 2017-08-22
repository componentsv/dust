import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, RequestMethod } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _title: string;
  _body: string;
  _added: Array<any> = new Array<any>();

  constructor(private _http: Http) { }

  onAdd() {
    const requestBody = {
      title: this._title || '[Unspecified]', body: this._body || '[Unspecified]',
    };
    this._http.post("http://jsonplaceholder.typicode.com/posts", requestBody).subscribe(
      res => {
        this._added.push(res.json());
      })
  }
}
