import { Component, ViewChild } from '@angular/core';
import { NgForm, FormControl, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSubmit(){
    alert('Submitted');
    }
}
