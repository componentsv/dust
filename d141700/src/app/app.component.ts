import { Component, ViewChild, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input: string = '';
  
  @ViewChild('message') message;
  
  ngAfterViewChecked() {
    console.log('AfterViewChecked');

    if (isNaN(parseInt(this.input))){
      this.message.nativeElement.innerHTML = "Input not numeric."; 
    } else {
      this.message.nativeElement.innerHTML = "Input is numeric."; }
    }
}
