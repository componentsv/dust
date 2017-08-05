import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  upperCase: string = '';
  lowerCase: string = '';

  @ViewChild('input10400') inputBox;

  textInput(event) {
    this.upperCase = event.target.value.toUpperCase();
    this.lowerCase = event.target.value.toLowerCase();
  }

  ngAfterViewInit() {
    this.inputBox.nativeElement.focus()
  }
}
