import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Headers, URLSearchParams, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _search = 'Atlanta';
  _searched = false;
  _result = '';

  constructor(private _http: Http) { }

  doSearch() {
    this.search(this._search).subscribe(
      res => {
        const obj = res.json();
        if ((obj) && (obj.places) && (obj.places.length) && (obj.places.length > 0)) {
          this._result = obj.places[0];
        } else {
          this._result = undefined;
        }
      }
      ,
      err => {
        console.log(err);
      },
      () => {
        this._searched = true;
      });
  }

  search(search) {
    const mashapeKey = 'OxWYjpdztcmsheZU9AWLNQcE9g9wp1qdRkFjsneaEp2Yf68nYH';
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Mashape-Key', mashapeKey);
    const options = new RequestOptions({
      headers: headers
    });

    // concatenated string
    const concatenatedUrl: string = "https://trailapi-trailapi.p.mashape.com?q[city_cont]=" + encodeURIComponent(search);
    return this._http.get(concatenatedUrl, options);
  }
}
