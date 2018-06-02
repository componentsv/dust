import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('title') title: ElementRef;

  ngAfterViewInit() {
    this.title.nativeElement.innerHTML = 'App works differently!';
  }
}
