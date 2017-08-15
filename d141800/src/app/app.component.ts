import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  interval;
  count = 0;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.count++;
    })
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    delete this.interval;
  }
}
