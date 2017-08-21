import { Component } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _searchText: string;
  _searchSubject: Rx.Subject<string>;
  _logs: Array<string> = [];
  
  constructor() {
    // Create new Subject.
    this._searchSubject = new Rx.Subject<string>();
    // Set the Subject up to subscribe to events and filter them by // debounce events and ensure they are distinct.
    this._searchSubject
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(
      // Handle event. Log it.
      searchText => this._logs.push(searchText));
  }

  public onChange(searchText: string) {
    // Emit an event to the Subject.
    this._searchSubject.next(searchText);
  }
}
