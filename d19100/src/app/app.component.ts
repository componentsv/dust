import { Component } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _logs: Array<string> = [];

  constructor() {
    const observable: Rx.Observable<any> = Rx.Observable.merge(
      Rx.Observable.fromEvent(document, 'keydown'), 
      Rx.Observable.fromEvent(document, 'click'),
      Rx.Observable.fromEvent(document, 'mousemove'), 
      Rx.Observable.fromEvent(document, 'scroll'),
      Rx.Observable.fromEvent(document, 'touchstart')
    );

    const idleEventObservable = observable.bufferTime(5000).filter(function (arr) {
      return arr.length == 0;
    })
      .subscribe(idleEvent => this._logs.push('idle'));
  }
}
