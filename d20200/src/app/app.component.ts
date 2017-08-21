import { Component } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, RequestMethod } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _search = 'Atlanta';
  _result = '';

  constructor(private _http: Http) { }

  doSearchConcatenatedUrl() {
    const mashapeKey = 'OxWYjpdztcmsheZU9AWLNQcE9g9wp1qdRkFjsneaEp2Yf68nYH';
    const headers: Headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('X-Mashape-Key', mashapeKey);

    const options = new RequestOptions({ headers: headers });

    // concatenated string
    const concatenatedUrl: string = "https://trailapi-trailapi.p.mashape.com?q[city_cont]=" + encodeURIComponent(this._search);

    return this._http.get(concatenatedUrl, options)
      .subscribe(res => { this._result = JSON.stringify(res.json()); })
  }

  doSearchOptionParameters() {
    const mashapeKey = 'OxWYjpdztcmsheZU9AWLNQcE9g9wp1qdRkFjsneaEp2Yf68nYH';
    const headers: Headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('X-Mashape-Key', mashapeKey);

    const params: URLSearchParams = new URLSearchParams();

    params.append('q[city_cont]', this._search);

    // params object
    const options = new RequestOptions({ headers: headers, params: params });

    return this._http.get("https://trailapi-trailapi.p.mashape.com?q[city_cont]=" + encodeURIComponent(this._search), options)
      .subscribe(res => { this._result = JSON.stringify(res.json()); })
  }

  doSearchOptionSearch() {
    const mashapeKey = 'OxWYjpdztcmsheZU9AWLNQcE9g9wp1qdRkFjsneaEp2Yf68nYH';
    const headers: Headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('X-Mashape-Key', mashapeKey);

    const params: URLSearchParams = new URLSearchParams();
    params.append('q[city_cont]', this._search);

    // search object
    const options = new RequestOptions({ headers: headers, search: params });

    return this._http.get("https://trailapi-trailapi.p.mashape.com?q[city_cont]=" + encodeURIComponent(this._search), options)
      .subscribe(res => { this._result = JSON.stringify(res.json()); })
  }
}
