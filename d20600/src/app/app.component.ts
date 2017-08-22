import { Component } from '@angular/core';
import { Service } from './Service';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _posts = [];
  _error;

  constructor(private _service: Service) { }

  ngOnInit() {
    this._service.getPosts().subscribe(
      response => {
        this._posts = response;
      },
      error => {
        this._error = error;
      });
  }
}
